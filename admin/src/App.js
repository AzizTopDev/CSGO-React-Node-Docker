import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, Redirect } from "react-router-dom";
import axios from './util/Api';
import SignIn from './pages/SingIn';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import Error404 from './pages/Error404';
import Dashboard from './pages/Dashboard';
import MainError404 from './pages/MainError404';
import {
    setInitUrl,
    getUser
} from "./actions";
import Hero from './components/Hero';
import Footer from './layout/Footer';
import Servers from './pages/Servers';
import DetailServer from './pages/DetailServer';
import CreateServer from './pages/CreateServer';
import UpdateServer from './pages/UpdateServer';
import Withdraw from './pages/Withdraw';
import Games from './pages/Games';
import CreateGame from './pages/CreateGame';

const RestrictedRoute = ({ component: Component, token, ...rest }) => {
    return (
        <Route
            {...rest}
            render={props =>
                token ?
                    <Component {...props} />
                    : <Redirect
                        to={{
                            pathname: '/sign-in',
                            state: { from: props.location }
                        }}
                    />}
        />
    );
};
class ProtectedPages extends Component {
    render() {
        return (
            <React.Fragment>
                <div id="page-container" className="sidebar-o sidebar-dark enable-page-overlay side-scroll page-header-fixed page-header-dark page-header-glass main-content-narrow">
                    <Sidebar />
                    <Header />
                    <main id="main-container">
                        <Hero />
                        <Switch>
                            <Redirect exact path='/pr' to="/pr/dashboard" />
                            <Route path='/pr/dashboard' component={Dashboard} />
                            <Route path='/pr/servers' component={Servers} />
                            <Route path='/pr/games' component={Games} />
                            <Route path='/pr/create-game' component={CreateGame} />
                            <Route path='/pr/detail-server/:serverId' component={DetailServer} />
                            <Route path='/pr/create-server' component={CreateServer} />
                            <Route path='/pr/update-server/:serverId' component={UpdateServer} />
                            <Route path='/pr/withdraw' component={Withdraw} />

                            <Route component={MainError404} />
                        </Switch>
                    </main>
                    <Footer />
                </div>
            </React.Fragment>
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
            <React.Fragment>
                <Switch>
                    <Redirect exact path="/" to="/dashboard" />
                    {/* <RestrictedRoute path='/pr' token={token} component={ProtectedPages} /> */}
                    <Route path='/pr' token={token} component={ProtectedPages} />

                    <Route path='/sign-in' component={SignIn} />
                    <Route component={Error404} />
                </Switch>
            </React.Fragment>
        );
    }
}
const mapStateToProps = ({ auth }) => {
    const { authUser, token, initURL } = auth;
    return { authUser, token, initURL }
};
export default connect(mapStateToProps, { setInitUrl, getUser })(App);
