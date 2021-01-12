import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../util/Api';
import { connect } from 'react-redux';

class Withdraw extends Component {
    state = {
        coins: null,
        paypalAddress: "",
        isChecked: false
    }
    onHandleWithdraw = () => {
        const data = {
            coins: this.state.coins,
            paypalAddress: this.state.paypalAddress
        }
        if (this.state.isChecked) {
            if(this.state.coins >= 1000 && this.state.paypalAddress !== "") {
                axios.post('/withdraw-coins', data)
                    .then((res) => {
                        alert("Please wait for admin approvement");
                    })
                    .catch(err => {
                        alert("Error during withdraw request !!");
                    });
            } else {
                alert("Amount should be more than 1000, paypal address should be filled !");
            }
        } else {
            alert("Did you check Term and policy ?");
        }
    }
    render() {
        const { coins } = this.state;
        const { authUser } = this.props.auth;
        return (
            <div className="bg-dark bg-image" style={{ backgroundImage: "url('/assets/media/photos/brand.jpg')" }}>
                <div className="bg-black-75" style={{ height: "100vh" }}>
                    <div className="bg-white border-rounded border-primary w-100 mw-60 withdraw-modal-pos">
                        <div className="d-flex bg-primary headline-section">
                            <div className="px-5 py-2 bg-primary-hover headline-section-logo">
                                <img src="/assets/media/photos/paypal.png" alt="" />
                            </div>
                        </div>
                        <div className="row no-gutters mx-5 mt-5 mb-2">
                            <h2 className="text-black font-w700 text-uppercase">Withdraw</h2>
                        </div>
                        <div className="row no-gutters mx-5 mb-4">
                            {/* <!-- deposit input show--> */}
                            <div className="col-md-6 pr-4 align-items-center">
                                <div className="row no-gutters mb-3">
                                    <h4 className="text-black font-w700 mb-0">You have: { authUser && authUser.coins }</h4>
                                    <img src="/assets/media/photos/money-bag.png" alt="" />
                                </div>
                                <div className="row no-gutters mb-2">
                                    <p className="text-secondary font-size-sm font-w700 mb-0">Withdraw Amount ( Minimunm 1000 )</p>
                                </div>
                                <div className="row no-gutters mb-4 pos-relative">
                                    <img
                                        className="withdraw-amount-img"
                                        src="/assets/media/photos/money-bag.png"
                                        alt="" />
                                    <input
                                        type="number"
                                        className="form-control border-rounded border-primary w-100 pl-5 height-3"
                                        placeholder="Enter coin amount..."
                                        value={coins}
                                        onChange={(ev) => this.setState({ coins: ev.target.value })}
                                    />
                                </div>
                                <div className="row no-gutters mb-4">
                                    <input
                                        type="text"
                                        className="form-control border-rounded border-primary w-100 pl-3 height-3"
                                        placeholder="Enter Paypal address"
                                        value={this.state.paypalAddress}
                                        onChange={(ev) => this.setState({ paypalAddress: ev.target.value })}
                                    />
                                </div>

                            </div>
                            {/* <!-- up to your wallet --> */}
                            <div className="col-md-6 pr-4">
                                <div className="row no-gutters border-bottom-primary">
                                    <div className="col-12 d-flex">
                                        <h4 className="">Withdraw:</h4>
                                        <span className="ml-auto text-black font-size-lg font-w700">
                                            {coins}
                                <img className="my-auto" src="/assets/media/photos/coin.png" alt="" />
                                        </span>
                                    </div>
                                    <div className="col-12 d-flex">
                                        <h4 className="">Tax:</h4>
                                        <span className="ml-auto text-black font-size-lg font-w700">
                                            10%
                                        </span>
                                    </div>
                                </div>
                                <div className="row no-gutters py-2">
                                    <h4 className="text-black font-w700">Total:</h4>
                                    <span className="ml-auto text-primary font-size-lg font-w700">
                                        {Math.floor(coins * 0.9)}$
                                    </span>
                                </div>
                                <div className="custom-control custom-checkbox custom-control-primary mb-4">
                                    <input type="checkbox" className="custom-control-input" id="term-policy" name="term-policy" checked={this.state.isChecked} onClick={() => this.setState({ isChecked: !this.state.isChecked })} />
                                    <label className="custom-control-label font-size-sm" htmlFor="term-policy">I have read and agree the <Link to="/refund-policy"> refund policy</Link></label>
                                </div>
                                <div className="row no-gutters">
                                    <button className="btn btn-rounded btn-primary px-5 py-2" onClick={this.onHandleWithdraw}>Withdraw</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, () => ({}))(Withdraw);