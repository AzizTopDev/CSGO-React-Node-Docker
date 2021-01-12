import React, { Component } from 'react';

export default class Stats extends Component {
    render() {
        return (
            <div className="bg-dark bg-image" style={{ backgroundImage: "url('/assets/media/photos/brand.jpg')" }}>
                <div className="bg-black-75" style={{ height: "100vh" }}>
                    <div className="bg-white border-rounded border-primary w-100 mw-60 stats-modal-pos">
                        <div className="d-flex bg-primary headline-section">
                            <div className="px-5 py-3 bg-primary-hover headline-section-logo">
                                <h1 className="text-white font-w700 mb-0">Stats</h1>
                            </div>
                        </div>
                        <div className="d-flex align-items-center p-4">
                            <img className="img-avatar mr-2" src="/assets/media/avatars/users.png" alt="" />
                            <span className="font-size-lg font-w700 mb-0">User name</span>
                        </div>
                        <div className="row no-gutters p-3">
                            <div className="col-sm-4 d-flex align-items-center px-3 mb-4">
                                <img className="img-avatar img-avatar48" src="/assets/media/photos/check.png" alt="" />
                                <div className="px-3">
                                    <p className="text-primary font-size-sm font-w700 mb-0">Wins</p>
                                    <span className="text-black font-size-lg font-w700">120</span>
                                </div>
                            </div>
                            <div className="col-sm-4 d-flex align-items-center px-3 mb-4">
                                <img className="img-avatar img-avatar48" src="/assets/media/photos/target.png" alt="" />
                                <div className="px-3">
                                    <p className="text-primary font-size-sm font-w700 mb-0">Kills</p>
                                    <span className="text-black font-size-lg font-w700">1200</span>
                                </div>
                            </div>
                            <div className="col-sm-4 d-flex align-items-center px-3 mb-4">
                                <img className="img-avatar img-avatar48" src="/assets/media/photos/coin.png" alt="" />
                                <div className="px-3">
                                    <p className="text-primary font-size-sm font-w700 mb-0">Coins Purchased</p>
                                    <span className="text-black font-size-lg font-w700">1200</span>
                                </div>
                            </div>

                            <div className="col-sm-4 d-flex align-items-center px-3 mb-4">
                                <img className="img-avatar img-avatar48" src="/assets/media/photos/times.png" alt="" />
                                <div className="px-3">
                                    <p className="text-primary font-size-sm font-w700 mb-0">Loss</p>
                                    <span className="text-black font-size-lg font-w700">50</span>
                                </div>
                            </div>
                            <div className="col-sm-4 d-flex align-items-center px-3 mb-4">
                                <img className="img-avatar img-avatar48" src="/assets/media/photos/clock.png" alt="" />
                                <div className="px-3">
                                    <p className="text-primary font-size-sm font-w700 mb-0">Time Played</p>
                                    <span className="text-black font-size-lg font-w700">1200</span>
                                </div>
                            </div>
                            <div className="col-sm-4 d-flex align-items-center px-3 mb-4">
                                <img className="img-avatar img-avatar48" src="/assets/media/photos/trophy.png" alt="" />
                                <div className="px-3">
                                    <p className="text-primary font-size-sm font-w700 mb-0">Sum Of Wins</p>
                                    <span className="text-black font-size-lg font-w700">1200</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}