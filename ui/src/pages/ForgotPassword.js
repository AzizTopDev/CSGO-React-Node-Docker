import React, { Component } from 'react';

export default class ForgotPassword extends Component {
    state = {
        email: ""
    };
    onRemindClick = () => {
        console.log("__ remind clicked __");
    }
    render() {
        return (
            <div className="bg-dark bg-image" style={{ backgroundImage: "url('/assets/media/photos/brand.jpg')" }}>
                <div className="bg-black-75" style={{ height: "100vh" }}>
                    <div className="bg-white border-rounded border-primary w-100 mw-60 forgot-modal-pos">
                        <div className="row no-gutters justify-content-center mt-5  mx-6 mb-5">
                            <h1 className="font-w700 text-uppercase mb-0">FORGOT PASSWORD</h1>
                        </div>
                        <p className="text-black font-size-sm mx-6">
                            Please specify your email address and we will send you password recovery link
                        </p>
                        {/* <!-- email field --> */}
                        <div className="row no-gutters justify-content-center input-container mx-6 mb-4">
                            <i className="si si-envelope fa-2x"></i>
                            <input className="border-rounded border-primary w-100 px-6 py-3" placeholder="Your E-mail" onChange={(ev) => this.setState({email: ev.target.value})} />
                        </div>
                        <div className="row no-gutters justify-content-center mx-6 mb-5">
                            <button className="btn btn-lg btn-rounded btn-primary" onClick={this.onRemindClick}>
                                <span className="font-size-lg align-items-center d-flex px-3">
                                    Remind
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}