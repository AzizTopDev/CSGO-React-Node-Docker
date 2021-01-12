import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";
import axios from './util/Api';
import Home from './pages/Home';
import SignIn from './pages/SingIn';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import Games from './pages/Games';
import Error404 from './pages/Error404';
import {
    setInitUrl,
    getUser
} from "./actions";
import Setting from './pages/Setting';
import Deposit from './pages/Deposit';
import Stats from './pages/Stats';
import Withdraw from './pages/Withdraw';
import Faq from './pages/Faq';
import Affiliate from './pages/Affiliate';
import Payment from './pages/Payment';
import Transaction from './pages/Transaction';

const RestrictedRoute = ({ component: Component, token, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                !token ?
                    <Component {...props} />
                    : <Redirect
                        to={{
                            pathname: '/home',
                            state: { from: props.location }
                        }}
                    />}
        />
    );
};
class ProtectedPages extends Component {
    render() {
        return (
            <Switch>
                <Redirect exact path='/pr' to="/pr/games" />
                <Route path='/pr/games' component={Games} />
                <Route path='/pr/setting' component={Setting} />
                <Route path='/pr/stats' component={Stats} />
                <Route path='/pr/affiliate' component={Affiliate} />
                <Route path='/pr/deposit' component={Deposit} />
                <Route path='/pr/withdraw' component={Withdraw} />
                <Route path='/pr/transaction' component={Transaction} />
                <Route path='/pr/payment' render={(props) => {
                    if(props.location.state && props.location.state.coins) {
                        const { coins } = props.location.state;
                        return <Payment coins={coins} />
                    } else {
                        return <Redirect to="/pr/deposit" />
                    }
                }}/>
            </Switch>
        );
    }
}
class App extends Component {
    componentWillMount() {
        if (this.props.initURL === '') {
            this.props.setInitUrl(this.props.history.location.pathname);
        }
    }
    componentWillReceiveProps(nextProps) {
        console.log(" ___ NEXT PROPS ___ ", nextProps);
        if (nextProps.token) {
            axios.defaults.headers.common['Authorization'] = "Bearer " + nextProps.token;
        }
        if (nextProps.token && !nextProps.authUser) {
            this.props.getUser();
        }
    }
    render() {
        const { match, location, token, authUser, initURL } = this.props;
        console.log(" props : ", this.props);
        return (
            <Switch>
                <Redirect exact path="/" to="/home" />
                <RestrictedRoute path='/pr' token={token} component={ProtectedPages} />

                <Route path='/home' component={Home} />
                <Route path='/sign-in' component={SignIn} />
                <Route path='/sign-up' component={SignUp} />
                <Route path='/forgot-pass' component={ForgotPassword} />
                <Route path='/setting' component={Setting} />
                <Route path='/faq' component={Faq} />
                <Route path='/affiliate' component={Affiliate} />

                <Route component={Error404} />
            </Switch>
        );
    }
}
const mapStateToProps = ({ auth }) => {
    const { authUser, token, initURL } = auth;
    return { authUser, token, initURL }
};
export default connect(mapStateToProps, { setInitUrl, getUser })(App);
