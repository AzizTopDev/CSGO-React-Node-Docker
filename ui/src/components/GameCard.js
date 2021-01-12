import React, { Component } from 'react';

export default class GameCard extends Component {
    render() {
        return (
            <div className="card mb-2">
                <div className="card-top-image"
                    style={{ backgroundImage: "url('/assets/media/photos/game-card-1.png')" }}>
                </div>
                <div className="card-bottom-image"
                    style={{ backgroundImage: "url('/assets/media/photos/card-bottom-image.png')" }}>
                    <h5 className="font-w700 text-black px-3 py-2 my-0">Game: A</h5>
                    <div className="px-2">
                        <div className="d-flex mb-2">
                            <img className="ellipse-icon"
                                src="/assets/media/photos/ellipse.png"
                                alt=""
                            />
                            <div className="card-font">Difficulty: <span
                                className="text-success ml-1">Easy</span></div>
                        </div>
                        <div className="d-flex mb-4">
                            <img className="ellipse-icon"
                                src="/assets/media/photos/ellipse.png"
                                alt=""
                            />
                            <div className="card-font">Entry fee: <span
                                className="text-danger ml-1">100</span>
                            </div>
                            <img className="my-auto ml-2 coin-icon"
                                src="/assets/media/photos/coin.png"
                                alt=""
                            />
                        </div>
                        <div className="d-flex ml-2">
                            <h6 className="coin-icon text-black font-w700 mb-0">Prize: <span
                                className="text-success font-size-base font-w700 ml-1">200</span>
                            </h6>
                            <img className="moneybag-icon ml-1 mr-2"
                                src="/assets/media/photos/money-bag.png"
                                alt=""
                            />
                            <button className="btn btn-rounded btn-primary btn-card">Join Game</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}