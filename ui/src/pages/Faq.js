import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class Faq extends Component {
    render() {
        return (
            <div id="page-container" className="page-header-dark page-header-blue main-content-narrow side-trans-enabled">
                <Header />
                <main id="main-container">
                    <div className="bg-white">
                        <div className="content content-full mt-6">
                            <div className="block-content border-rounded border-primary p-sm-4 p-md-5 p-lg-6 faq-container-size">
                                <div className="d-flex mb-4">
                                    <span className="text-primary font-size-h3 mr-2"><i className="far fa-fw fa-question-circle"></i></span>
                                    <h2 className="font-w700 mb-0">How it Works</h2>
                                </div>
                                {/* <!-- Rules 1 --> */}
                                <div className="d-flex mb-4">
                                    <h2 className="font-w700 text-primary mb-0">Rules</h2>
                                </div>
                                <div className="d-flex mb-4">
                                    <p className="text-black mb-0">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                </p>
                                </div>
                                {/* <!-- Rules 2 --> */}
                                <div className="d-flex mb-4">
                                    <h2 className="font-w700 text-primary mb-0">Rules</h2>
                                </div>
                                <div className="d-flex mb-4">
                                    <p className="text-black mb-0">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                </p>
                                </div>
                                {/* <!-- Rules 3 --> */}
                                <div className="d-flex mb-4">
                                    <h2 className="font-w700 text-primary mb-0">Rules</h2>
                                </div>
                                <div className="d-flex mb-4">
                                    <p className="text-black mb-0">
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                                </p>
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