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
    onSteamLoginHandle = () => {
        const popupWindow = window.open(
            process.env.REACT_APP_API_URL + "/auth/steam",
            "_blank",
            "width=800, height=600",
        );
        if (window.focus) popupWindow.focus();
    }
    onGetMessageEvent = async event => {
        if (event.origin !== process.env.REACT_APP_API_URL) return;
        const { token, success } = event.data;
        if (success) {
            localStorage.setItem("token", JSON.stringify(token));
            console.error("______________ event.data __________", event.data);
            console.error("______________ typeof token !!!! __________", typeof token);
            console.error("______________ token !!!! __________", token);
            axios.defaults.headers.common['Authorization'] = "Bearer " + token;
            await this.props.getUser();
            this.props.history.push("/home");
        }
    }
    componentWillMount() {
        window.addEventListener("message", this.onGetMessageEvent);
    }
    componentWillUnmount() {
        window.removeEventListener("message", this.onGetMessageEvent);
    }
    render() {
        return (
            <div className="bg-dark bg-image" style={{ backgroundImage: "url('/assets/media/photos/brand.jpg')" }}>
                <div className="bg-black-75" style={{ height: "100vh" }}>
                    <div className="bg-white border-rounded border-primary w-100 mw-60 signin-modal-pos">
                        <div className="d-flex justify-content-center mt-5 mb-5">
                            <h1 className="font-w700 text-uppercase mb-0">SIGN IN</h1>
                        </div>
                        <div className="row no-gutters mx-5 mb-4">
                            <div className="col-12">
                                {/* <!-- email field --> */}
                                <div className="row no-gutters justify-content-center mb-4 pos-relative">
                                    <i className="si si-envelope fa-2x signin-field-icon"></i>
                                    <input
                                        className="form-control border-rounded border-primary w-100 pl-6 height-4"
                                        placeholder="Your E-mail"
                                        onChange={(ev) => { this.setState({ email: ev.target.value }) }}
                                    />
                                </div>
                                {/* <!-- password field --> */}
                                <div className="row no-gutters justify-content-center mb-4 pos-relative">
                                    <i className="si si-lock fa-2x signin-field-icon"></i>
                                    <input
                                        className="form-control border-rounded border-primary w-100 pl-6 height-4"
                                        placeholder="Password"
                                        onChange={(ev) => { this.setState({ password: ev.target.value }) }}
                                    />
                                </div>
                                <div className="row no-gutters mb-4">
                                    <Link to="/forgot-pass" className="text-primary font-w700 ml-auto">Forgot password?</Link>
                                </div>
                                <div className="row no-gutters mb-5">
                                    <div className="mr-auto">
                                        <div className="d-flex mb-1">
                                            <span className="text-black font-size-base font-w700">Don't have an account?</span>
                                        </div>
                                        <div className="d-flex mb-1">
                                            <Link to="/sign-up" className="text-primary font-size-base font-w700">Sign up new account</Link>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="btn btn-rounded btn-primary ml-auto mb-1 px-4" onClick={this.onLoginClickHandle}>
                                            <span className="font-size-lg">Sign In</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-5 justify-content-center">
                                    <button className="btn btn-lg btn-rounded btn-primary steam-button" onClick={this.onSteamLoginHandle}>
                                        <span className="font-size-lg align-items-center d-flex px-3">
                                            <i className="fab fa-steam-symbol fa-2x mr-2"></i>
                                            Login with Steam
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapDispatchToProps = { setInitUrl, getUser };
export default connect(() => ({}), mapDispatchToProps)(SignIn);