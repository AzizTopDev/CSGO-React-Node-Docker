import React, { Component } from 'react';

export default class Setting extends Component {
    state = {
        name: "",
        email: "",
        password: ""
    }
    onSaveClick = () => {
        
    }
    render() {
        return (
            <div className="bg-dark bg-image" style={{ backgroundImage: "url('/assets/media/photos/brand.jpg')" }}>
                <div className="bg-black-75" style={{ height: "100vh" }}>
                    <div className="bg-white border-rounded border-primary w-100 setting-modal-pos">
                        <div className="d-flex bg-primary headline-section">
                            <div className="px-5 py-3 bg-primary-hover headline-section-logo">
                                <h1 className="text-white font-w700 mb-0">Settings</h1>
                            </div>
                        </div>
                        <div className="row no-gutters justify-content-center mx-5 mt-5 mb-2">
                            <h2 className="text-black font-w700">Change your account setting here</h2>
                        </div>
                        <div className="row no-gutters mx-5 mb-2">
                            <div className="col-sm-12 align-items-center">
                                <div className="form-group">
                                    <label for="name" className="text-black font-size-lg font-w700">Name:</label>
                                    <input
                                        type="text"
                                        className="form-control border-rounded border-primary h-3"
                                        id="name"
                                        name="name"
                                        placeholder="Enter name here..." 
                                        onChange={(ev) => this.setState({ name: ev.target.value})}/>
                                </div>
                            </div>

                        </div>
                        <div className="row no-gutters mx-5 mb-2">
                            <div className="col-sm-12 align-items-center">
                                <div className="form-group">
                                    <label for="name" className="text-black font-size-lg font-w700">Email:</label>
                                    <input
                                        type="text"
                                        className="form-control border-rounded border-primary h-3"
                                        id="name"
                                        name="name"
                                        placeholder="Enter email here..." 
                                        onChange={(ev) => this.setState({ email: ev.target.value})}/>
                                </div>
                            </div>

                        </div>
                        <div className="row no-gutters mx-5 mb-4">
                            <div className="col-sm-12 align-items-center">
                                <div className="form-group">
                                    <label for="name" className="text-black font-size-lg font-w700">Password:</label>
                                    <input
                                        type="text"
                                        className="form-control border-rounded border-primary h-3"
                                        id="name"
                                        name="name"
                                        placeholder="Enter password here..." 
                                        onChange={(ev) => this.setState({ password: ev.target.value})}/>
                                </div>
                            </div>

                        </div>
                        <div className="row no-gutters mx-5 mb-5">
                            <button className="btn btn-rounded btn-primary px-5 py-2" onClick={this.onSaveClick}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}