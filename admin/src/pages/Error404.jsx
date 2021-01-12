import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Error404 extends Component {
    render() {
        return (
                <main id="main-container">
                    {/* Page Content */}
                    <div className="bg-image" style={{backgroundImage: 'url("/assets/media/photos/lost.png")'}}>
                        <div className="hero bg-white-75">
                            <div className="hero-inner">
                                <div className="content content-full">
                                    <div className="px-3 py-5 text-center">
                                        <div className="row invisible" data-toggle="appear">
                                            <div className="col-sm-6 text-center text-sm-right">
                                                <div className="display-1 text-danger font-w700">404</div>
                                            </div>
                                            <div className="col-sm-6 text-center d-sm-flex align-items-sm-center">
                                                <div className="display-1 text-muted font-w300">Error</div>
                                            </div>
                                        </div>
                                        <h1 className="h2 font-w700 mt-5 mb-3 invisible" data-toggle="appear"
                                            data-class="animated fadeInUp" data-timeout={300}>Oops.. You just found an error page..
                                        </h1>
                                        <h2 className="h3 font-w400 text-muted mb-5 invisible" data-toggle="appear"
                                            data-class="animated fadeInUp" data-timeout={450}>We are sorry but the page you are looking for was not found..</h2>
                                        <div className="invisible" data-toggle="appear" data-class="animated fadeInUp"
                                            data-timeout={600}>
                                            <Link className="btn btn-hero-secondary" to="/pr">
                                                <i className="fa fa-arrow-left mr-1" /> Back to all Errors
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END Page Content */}
                </main>
        );
    }
}