import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { setInitUrl, getUser } from '../actions';
import { connect } from 'react-redux';
import axios from '../util/Api';

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    };
    onLoginClickHandle = () => {
        console.log("__ login button clicked __");
    }

    render() {
        const { email, password } = this.state;
        return (
            <main id="main-container">
                {/* Page Content */}
                <div className="bg-image" style={{ backgroundImage: 'url("/assets/media/photos/bg-brand-admin.jpg")' }}>
                    <div className="row no-gutters justify-content-center bg-primary-dark-op">
                        <div className="hero-static col-sm-8 col-md-6 col-xl-4 d-flex align-items-center p-2 px-sm-0">
                            {/* Sign In Block */}
                            <div className="block block-transparent block-rounded w-100 mb-0 overflow-hidden">
                                <div className="block-content block-content-full px-lg-5 px-xl-6 py-4 py-md-5 py-lg-6 bg-white">
                                    {/* Header */}
                                    <div className="mb-2 text-center">
                                        <Link className="link-fx font-w700 font-size-h1" to="/">
                                            <span className="text-dark"></span><span className="text-primary">GamesWeb</span>
                                        </Link>
                                        <p className="text-uppercase font-w700 font-size-sm text-muted">Sign In</p>
                                    </div>
                                    {/* END Header */}
                                    {/* Sign In Form */}
                                    <div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="login-email"
                                                    name="login-email" placeholder="Email" 
                                                    value={email}
                                                    onChange={(ev) => this.setState({email: ev.target.value})}/>
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <i className="fa fa-user-circle" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="input-group">
                                                <input type="password" className="form-control" id="login-password"
                                                    name="login-password" placeholder="Password" 
                                                    value={password}
                                                    onChange={(ev) => this.setState({password: ev.target.value})}/>
                                                <div className="input-group-append">
                                                    <span className="input-group-text">
                                                        <i className="fa fa-asterisk" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="form-group d-sm-flex justify-content-sm-between align-items-sm-center text-center text-sm-left">
                                            <div className="custom-control custom-checkbox custom-control-primary">
                                                <input type="checkbox" className="custom-control-input" id="login-remember-me"
                                                    name="login-remember-me" defaultChecked />
                                                <label className="custom-control-label" htmlFor="login-remember-me">Remember Me</label>
                                            </div>
                                            <div className="font-w600 font-size-sm py-1">
                                                <Link to="/forgot-pass">Forgot Password?</Link>
                                            </div>
                                        </div>
                                        <div className="form-group text-center">
                                            <button type="submit" className="btn btn-hero-primary" onClick={this.onLoginClickHandle}>
                                                <i className="fa fa-fw fa-sign-in-alt mr-1" /> Sign In
                                            </button>
                                        </div>
                                    </div>
                                    {/* END Sign In Form */}
                                </div>
                            </div>
                            {/* END Sign In Block */}
                        </div>
                    </div>
                </div>
                {/* END Page Content */}
            </main>
        );
    }
}
const mapDispatchToProps = { setInitUrl, getUser };
export default connect(() => ({}), mapDispatchToProps)(SignIn);