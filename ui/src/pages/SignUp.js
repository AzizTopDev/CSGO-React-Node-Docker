import React, { Component } from 'react';

export default class SignUp extends Component {
    state = {
        name: "",
        email: "",
        pass: "",
        passConfirm: "",
        isPolicyChecked: false,
        isTermChecked: false,
    };
    render() {
        return (
            <div className="bg-dark bg-image" style={{ backgroundImage: "url('/assets/media/photos/brand.jpg')" }}>
                <div className="bg-black-75" style={{ height: "100vh" }}>
                    <div className="bg-white border-rounded border-primary w-100 mw-60 signup-modal-pos">
                        <div className="d-flex justify-content-center mt-5 mb-5">
                            <h1 className="font-w700 text-uppercase mb-0">SIGN UP</h1>
                        </div>
                        <div className="row no-gutters mx-5 mb-4">
                            <div className="col-12">
                                {/* <!-- name field --> */}
                                <div className="row no-gutters justify-content-center mb-4 input-container">
                                    <i className="si si-user fa-2x"></i>
                                    <input className="border-rounded border-primary w-100 px-6 py-3" placeholder="Your name" 
                                    onChnage={(ev) => this.setState({name: ev.target.value})}/>
                                </div>
                                {/* <!-- email field --> */}
                                <div className="row no-gutters justify-content-center mb-4 input-container">
                                    <i className="si si-envelope fa-2x"></i>
                                    <input className="border-rounded border-primary w-100 px-6 py-3" placeholder="Your E-mail" 
                                    onChnage={(ev) => this.setState({email: ev.target.value})}/>
                                </div>
                                {/* <!-- password field --> */}
                                <div className="row no-gutters justify-content-center mb-4 input-container">
                                    <i className="si si-lock fa-2x"></i>
                                    <input className="border-rounded border-primary w-100 px-6 py-3" placeholder="Password" 
                                    onChnage={(ev) => this.setState({pass: ev.target.value})}/>
                                </div>
                                {/* <!-- password field --> */}
                                <div className="row no-gutters justify-content-center mb-5 input-container">
                                    <i className="si si-lock fa-2x"></i>
                                    <input className="border-rounded border-primary w-100 px-6 py-3" placeholder="Repeat Password" 
                                    onChnage={(ev) => this.setState({passConfirm: ev.target.value})}/>
                                </div>
                                <div className="row no-gutters mb-2">
                                    <div className="custom-control custom-checkbox custom-control-primary mb-1">
                                        <input type="checkbox" className="custom-control-input" id="term" name="term" checked={this.state.isTermChecked}
                                            onClick={() => this.setState({ isTermChecked: !this.state.isTermChecked })} />
                                        <label className="custom-control-label font-size-sm font-w400 lh-1" for="term">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</label>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-5">
                                    <div className="custom-control custom-checkbox custom-control-primary mb-1">
                                        <input type="checkbox" className="custom-control-input" id="agreement" name="agreement" checked={this.state.isPolicyChecked}
                                            onClick={() => this.setState({ isPolicyChecked: !this.state.isPolicyChecked })} />
                                        <label className="custom-control-label font-size-sm font-w400 lh-1" for="agreement">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</label>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-5 justify-content-center">
                                    <button className="btn btn-lg btn-rounded btn-primary">
                                        <span className="font-size-lg align-items-center d-flex px-3">
                                            Register
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