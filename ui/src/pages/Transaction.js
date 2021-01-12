import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../util/Api';

class Transaction extends Component {
    _isMounted = false;
    state = {
        transactions: []
    }
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            axios.get('/transactions').then(({ data }) => {
                console.log(" Get transactions Response : ", data);
                this.setState({ transactions: data.transactions })
            }).catch(err => {
                console.error(" Transaction api err : ", err);
            });
        }
    }
    render() {
        const { transactions } = this.state;
        console.error(" transactions ---------- ", transactions);
        return (
            <div className="bg-dark bg-image" style={{ backgroundImage: "url('/assets/media/photos/brand.jpg')" }}>
                <div className="d-flex align-items-center bg-black-75 justify-content-center" style={{ height: "100vh" }}>
                    <div className="block block-rounded block-bordered w-75 my-6">
                        <div className="block-header block-header-default">
                            <h3 className="block-title my-2">Transactio History</h3>
                            <div className="block-options">
                                <div className="block-options-item">
                                    <Link to="/home" className="btn btn-outline-secondary mr-4"><code>Go Home</code></Link>
                                    <Link to="/pr/deposit" className="btn btn-primary">Purchase coins now!</Link>
                                </div>
                            </div>
                        </div>
                        <div className="block-content">
                            <table className="table table-vcenter">
                                <thead className="thead-dark">
                                    <tr>
                                        <th className="text-center" style={{ width: "200px" }}>Date</th>
                                        <th>Transaction</th>
                                        <th className="d-none d-sm-table-cell text-center" style={{ width: "50px" }}>Action</th>
                                        <th className="d-none d-sm-table-cell text-center" style={{ width: "50px" }}>Price</th>
                                        <th className="d-none d-sm-table-cell text-center" style={{ width: "50px" }}>Currency</th>
                                        <th className="text-center" style={{ width: "200px" }}>Coins</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        transactions.length ?
                                            transactions.map((rec, index) => {
                                                function Message() {
                                                    if (rec.action === "deposit") {
                                                        return <span className="text-secondary">Deposit <span className="text-info">${rec.price} USD</span> and purchased <span className="text-info">${rec.coins} COINS</span></span>;
                                                    } else {
                                                        return <span className="text-secondary">Withdraw <span className="text-info">${rec.price} USD</span> and spent <span className="text-info">${rec.coins} COINS</span></span>;
                                                    }
                                                }
                                                const tDate = new Date(rec.date);
                                                console.log(" tDate : ", tDate);
                                                const dateString = `${tDate.getDate()}-${tDate.getMonth()}-${tDate.getFullYear()} ${tDate.getHours()}:${tDate.getMinutes()}`
                                                return (
                                                    <tr key={index}>
                                                        <td className="text-center">{dateString}</td>
                                                        <td className="font-w600">
                                                            <Message />
                                                        </td>
                                                        <td className="d-none d-sm-table-cell text-center">
                                                            <span className="badge badge-info">{rec.action}</span>
                                                        </td>
                                                        <td className="d-none d-sm-table-cell text-center">
                                                            <span className="text-black">{rec.price}</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="badge badge-warning">USD</span>
                                                        </td>
                                                        <td className="text-center">
                                                            <span className="text-black">{rec.action === "deposit" ? `+` : `-`} {rec.coins}</span>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                            : null
                                    }
                                </tbody>
                            </table>
                            {
                                transactions.length ? null
                                    : <div className="d-flex justify-content-center mt-5 mb-4">
                                        <h5>There's no transactions yet...</h5>
                                    </div>

                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Transaction;