import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <footer id="page-footer" className="bg-body-light">
                <div className="content py-0">
                    <div className="row font-size-sm">
                        <div className="col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right">
                            Developing <i className="fa fa-heart text-danger mr-1" /> by
                            <span className="font-w600 ml-1">A.A.A.</span>
                        </div>
                        <div className="col-sm-6 order-sm-1 text-center text-sm-left">
                            <a className="font-w600" href="/" target="_blank">GamesWeb 1.0</a> © <span data-toggle="year-copy" />
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}