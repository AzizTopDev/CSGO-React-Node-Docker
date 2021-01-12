import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default class Affiliate extends Component {
    state = {
        code: ""
    };
    render() {
        return (
            <div id="page-container" className="page-header-dark page-header-blue main-content-narrow side-trans-enabled">
                <Header />
                <main id="main-container">
                    {/* <!-- Use the partner code --> */}
                    <div className="bg-white">
                        <div className="content content-full mt-6">
                            <div className="block-content">
                                <div className="d-flex py-3 justify-content-center">
                                    <h3 className="font-w700 text-black text-uppercase mb-0">
                                        Use the partner code
                                </h3>
                                </div>
                                <div className="d-flex justify-content-center mb-5">
                                    <p>Users who make deposits using your code, will generate a credit to your balance</p>
                                    <Link to="/" className="text-primary ml-2"><i className="far fa-fw fa-question-circle"></i></Link>
                                </div>
                                {/* <!-- row --> */}
                                <div className="row justify-content-center mb-3">
                                    {/* <!-- item 1 --> */}
                                    <div className="mx-3 mb-3 border-rounded border-primary affiliate-card-size">
                                        <div className="content content-full">
                                            <div className="d-flex mb-3">
                                                <span className="text-primary my-auto mr-2"><i className="fa fa-fw fa-user"></i></span>
                                                <h3 className="font-w700 text-black mb-0">Redeem code</h3>
                                            </div>
                                            <p className="text-black font-size-sm mb-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                                            <div className="d-flex mb-3">
                                                <input 
                                                    className="border-rounded border-primary w-100 mr-4 px-2" 
                                                    placeholder="Enter code..." 
                                                    value={this.state.code}
                                                    onChange={(ev) => this.setState({ code: ev.target.value })}/>
                                                <button className="btn btn-lg btn-primary">SAVE</button>
                                            </div>
                                            <div className="d-flex mb-3">
                                                <span className="text-primary mr-2"><i className="si si-present fa-2x"></i></span>
                                                <h3 className="font-w700 text-primary mb-0">Lorem ipsum dolor sit amet</h3>
                                            </div>
                                            <p className="text-black font-size-sm mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                                        </div>
                                    </div>
                                    {/* <!-- item 2 --> */}
                                    <div className="mx-3 mb-3 border-rounded border-primary affiliate-card-size">
                                        <div className="content content-full">
                                            <div className="d-flex mb-3">
                                                <span className="text-primary my-auto mr-2"><i className="fa fa-fw fa-user"></i></span>
                                                <h3 className="font-w700 text-black mb-0">Your code</h3>
                                            </div>
                                            <p className="text-black font-size-sm mb-3">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                                            <div className="d-flex mb-3">
                                                <input 
                                                    className="border-rounded border-primary w-100 mr-4 px-2" 
                                                    placeholder="Enter code..." 
                                                    value={this.state.code}
                                                    onChange={(ev) => this.setState({ code: ev.target.value })}/>
                                                <button className="btn btn-lg btn-primary">COPY</button>
                                            </div>
                                            <p className="text-black font-size-sm mb-0">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
                                        </div>
                                    </div>
                                    {/* <!-- item 3 --> */}
                                    <div className="mx-3 mb-3 border-rounded border-primary affiliate-card-size">
                                        <div className="content content-full">
                                            <div className="d-flex mb-3">
                                                <span className="text-primary my-auto mr-2"><i className="fa fa-fw fa-user"></i></span>
                                                <h3 className="font-w700 text-black mb-0">Statistics</h3>
                                            </div>
                                            <p className="text-black font-size-sm mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
                                            <div className="d-flex mb-4">
                                                <div className="d-flex border-rounded border-primary w-100 height-3">
                                                    <h3 className="text-black my-auto ml-3">0</h3>
                                                    <span className="text-primary my-auto ml-2"><i className="fa fa-fw fa-user"></i></span>
                                                    <p className="text-secondary font-size-sm my-auto ml-auto mr-3">Users invited</p>
                                                </div>
                                            </div>
                                            <div className="d-flex">
                                                <div className="d-flex border-rounded border-primary w-100 height-3">
                                                    <h3 className="text-black my-auto ml-3">0</h3>
                                                    <span className="text-primary my-auto ml-2"><i className="fa fa-fw fa-dollar-sign"></i></span>
                                                    <p className="text-secondary font-size-sm my-auto ml-auto mr-3">Money earned</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- footer --> */}
                    <Footer />
                </main>
            </div>
        );
    }
}