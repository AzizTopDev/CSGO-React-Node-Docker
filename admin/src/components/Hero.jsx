import React, { Component } from 'react';

export default class Hero extends Component {
    render() {
        return (
            <div className="bg-image" style={{ backgroundImage: 'url("/assets/media/photos/hero.png")' }}>
                <div className="bg-black-10">
                    <div className="content content-full content-top">
                        <div className="pt-5 pb-4 text-center">
                            <h1 className="h2 font-w700 mb-2 text-white">
                                Server: MC_1685
                            </h1>
                            <h2 className="h5 text-white-75 mb-0">
                                1GHz - 1GB RAM
                            </h2>
                            <span className="badge badge-success mt-2">
                                <i className="fa fa-spinner fa-spin mr-1" /> Running
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}