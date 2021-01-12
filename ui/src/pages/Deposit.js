import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function calculatePrice(coins) {
    return coins / 10;
};
export default class Deposit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isChecked: false,
            coinAmount: 0,
        }
    }
    render() {
        return (
            <div className="bg-dark bg-image" style={{ backgroundImage: "url('/assets/media/photos/brand.jpg')" }}>
                <div className="bg-black-75" style={{ height: "100vh" }}>
                    <div className="bg-white border-rounded border-primary w-100 mw-60 deposit-modal-pos">
                        <div className="d-flex bg-primary headline-section">
                            <div className="px-5 py-2 bg-primary-hover headline-section-logo">
                                <img className="" src="/assets/media/photos/master-visa.png" alt="" />
                            </div>
                        </div>
                        <div className="row no-gutters mx-5 mt-5 mb-2">
                            <h2 className="text-black font-w700 text-uppercase">Top up your balance</h2>
                        </div>
                        <div className="row no-gutters mx-5 mb-4">
                            {/* <!-- deposit input show--> */}
                            <div className="col-md-6 pr-4 align-items-center">
                                <div className="row no-gutters mb-4">
                                    <div type="button" className="d-flex border-rounded border-primary w-100 deposit-input" onClick={ () => this.setState({coinAmount: 500}) }>
                                        <h6 className="text-black my-auto mx-3">500</h6>
                                        <img className="my-auto" src="/assets/media/photos/coin.png" alt="" />
                                        <h3 className="text-black my-auto ml-auto mr-3">50$</h3>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-4">
                                    <div type="button" className="d-flex border-rounded border-primary w-100 deposit-input" onClick={ () => this.setState({coinAmount: 1000}) }>
                                        <h6 className="text-black my-auto mx-3">1000</h6>
                                        <img className="my-auto mr-2" src="/assets/media/photos/coin.png" alt="" />
                                        <span className="d-flex my-auto text-success font-size-sm font-w700">
                                            + bonus 60
                                            <img className="my-auto" style={{ width: ".85rem", marginLeft: ".3rem" }} src="/assets/media/photos/coin.png" alt="" />
                                        </span>
                                        <h3 className="text-black my-auto ml-auto mr-3">100$</h3>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-4">
                                    <div type="button" className="d-flex border-rounded border-primary w-100 deposit-input" onClick={ () => this.setState({coinAmount: 1200}) }>
                                        <h6 className="text-black my-auto mx-3">1200</h6>
                                        <img className="my-auto mr-2" src="/assets/media/photos/coin.png" alt="" />
                                        <span className="d-flex my-auto text-success font-size-sm font-w700">
                                            + bonus 80
                                            <img className="my-auto" style={{ width: "0.85rem", marginLeft: ".3rem" }} src="/assets/media/photos/coin.png" alt="" />
                                        </span>
                                        <h3 className="text-black my-auto ml-auto mr-3">120$</h3>
                                    </div>
                                </div>
                                <div className="row no-gutters mb-4">
                                    <div type="button" className="d-flex border-rounded border-primary w-100 deposit-input" onClick={ () => this.setState({coinAmount: 5000}) }>
                                        <h6 className="text-black my-auto mx-3">5000</h6>
                                        <img className="my-auto mr-2" src="/assets/media/photos/coin.png" alt="" />
                                        <span className="d-flex my-auto text-success font-size-sm font-w700">
                                            + bonus 125
                                            <img className="my-auto" style={{ width: "0.85rem", marginLeft: ".3rem" }} src="/assets/media/photos/coin.png" alt="" />
                                        </span>
                                        <h3 className="text-black my-auto ml-auto mr-3">500$</h3>
                                    </div>
                                </div>

                            </div>
                            {/* <!-- up to your wallet --> */}
                            <div className="col-md-6 pr-4">
                                <div className="row no-gutters border-bottom-primary">
                                    <div className="d-flex w-100 mb-3">
                                        <h4 className="my-0">Up to your wallet</h4>
                                        <span className="d-flex ml-auto text-black font-size-lg font-w700">
                                            {this.state.coinAmount}
                                            <img className="my-auto ml-1" src="/assets/media/photos/coin.png" alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="row no-gutters py-2">
                                    <h4 className="text-black font-w700">Total</h4>
                                    <span className="ml-auto text-primary font-size-lg font-w700">
                                        {calculatePrice(this.state.coinAmount)} $
                        </span>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-primary mb-4">
                                    <input type="checkbox" className="custom-control-input" id="term-policy" name="term-policy" checked={this.state.isChecked} onChange={() => this.setState({isChecked: !this.state.isChecked})}/>
                                    <label className="custom-control-label font-size-sm" style={{lineHeight: "1.5rem"}} htmlFor="term-policy">I have read and agree the <Link to="/refund-policy"> refund policy</Link></label>
                                </div>
                                <div className="row no-gutters">
                                    <Link to={{
                                         pathname: "/pr/payment", 
                                         state: {coins: this.state.coinAmount} 
                                    }} 
                                    className={`btn btn-rounded btn-primary px-5 py-2${(this.state.isChecked && this.state.coinAmount)? "" : " disabled"}`}>Pay</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}