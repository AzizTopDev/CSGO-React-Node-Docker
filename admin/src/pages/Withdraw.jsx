import React, { Component } from 'react';
import axios from '../util/Api';
import { toastr } from 'react-redux-toastr';

export default class Withdraw extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            transactions: []
        };
    }
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.getWithdraws();
        }
    }
    getWithdraws = () => {
        this.setState({ isLoading: true });
        axios.get('/admin/payment/withdraws').then(({ data }) => {
            const { transactions } = data;
            this.setState({
                isLoading: false,
                transactions: transactions
            });
        }).catch(err => {
            this.setState({ isLoading: false });
            toastr.error('Error during Get withdraw Queue !');
        });;
    }
    onHandleApprove = (transactionId) => {
        this.setState({ isLoading: true });
        axios.get(`/admin/payment/approve/${transactionId}`).then((res) => {
            this.getWithdraws();
        }).catch(err => {
            this.setState({ isLoading: false });
            toastr.warning('Error during Approve withdraw request !');
        });
    }
    onHandleCancel = (transactionId) => {
        this.setState({ isLoading: true });
        axios.get(`/admin/payment/cancel/${transactionId}`).then((res) => {
            this.getWithdraws();
        }).catch(err => {
            this.setState({ isLoading: false });
            toastr.warning('Error during cancel withdraw request !');
        });
    }
    render() {
        const { isLoading, transactions } = this.state;
        return (
            <div className="content content-full">
                <div className="block block-rounded block-bordered">
                    <div className="block-header block-header-default">
                        <h3 className="block-title">Withdraw Request <small>Queue</small></h3>
                    </div>
                    <div className="block-content block-content-full">
                        <div className="dataTables_wrapper dt-bootstrap4 no-footer">
                            {/* Here is search row */}
                            {/* <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <div className="dataTables_length">
                                        <label>
                                            <select
                                                name="DataTables_Table_0_length" aria-controls="DataTables_Table_0"
                                                className="form-control">
                                                <option value={5}>5</option>
                                                <option value={10}>10</option>
                                                <option value={20}>20</option>
                                            </select>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-6">
                                    <div className="dataTables_filter">
                                        <label>
                                            <input type="search" className="form-control" placeholder="Search.." />
                                        </label>
                                    </div>
                                </div>
                            </div>
                             */}
                            <div className="row">
                                <div className="col-sm-12 table-responsive">
                                    <table className="table table-bordered table-striped table-vcenter dataTable no-footer"
                                        role="grid" aria-describedby="DataTables_Table_0_info">
                                        <thead>
                                            <tr role="row">
                                                <th className="text-center  " style={{ width: "80px" }} tabIndex={0}
                                                    rowSpan={1} colSpan={1}># id</th>
                                                <th className="sorting" style={{ width: '250px' }} tabIndex={0} rowSpan={1}
                                                    colSpan={1}>Username</th>
                                                <th className="d-none d-sm-table-cell" style={{ width: '250px' }} tabIndex={0}
                                                    rowSpan={1} colSpan={1}>Paypal Address
                                                </th>
                                                <th className="d-none d-sm-table-cell" tabIndex={0}
                                                    rowSpan={1} colSpan={1}>Spent(USD)
                                                </th>
                                                <th className="d-none d-sm-table-cell" tabIndex={0}
                                                    rowSpan={1} colSpan={1}>Earn(USD)
                                                </th>
                                                <th className="d-none d-sm-table-cell" style={{ width: '250px' }} tabIndex={0}
                                                    rowSpan={1} colSpan={1}>Wallet Coins
                                                </th>
                                                <th className="d-none d-sm-table-cell" style={{ width: '250px' }} tabIndex={0}
                                                    rowSpan={1} colSpan={1}>Withdraw Coins
                                                </th>
                                                <th className="d-none d-sm-table-cell" style={{ width: '250px' }} tabIndex={0}
                                                    rowSpan={1} colSpan={1}>Withdraw Money(USD)
                                                </th>
                                                <th className="d-none d-sm-table-cell sorting" tabIndex={0}
                                                    rowSpan={1} colSpan={1}>Status</th>
                                                <th className="sorting" style={{ width: '500px' }} tabIndex={0}
                                                    rowSpan={1} colSpan={1}>
                                                    Issue Date</th>
                                                <th className="" style={{ width: '200px' }} tabIndex={0}
                                                    rowSpan={1} colSpan={1}>
                                                    Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                !isLoading && transactions.length > 0 ?
                                                    transactions.map((dt, index) => {
                                                        const { id, username, paypalAddress, coins, spent, earn, dealCoins, price, action, date } = dt;
                                                        console.log(" dt ----", dt);
                                                        return (
                                                            <tr key={index} role="row" className="odd">
                                                                <td className="text-center">{id}</td>
                                                                <td className="font-w600">
                                                                    <span className="text-muted">{username}</span>
                                                                </td>
                                                                <td className="d-none d-sm-table-cell sorting_1">
                                                                    <em className="text-muted">{paypalAddress}</em>
                                                                </td>
                                                                <td className="d-none d-sm-table-cell sorting_1">
                                                                    <em className="text-muted">{spent}</em>
                                                                </td>
                                                                <td className="d-none d-sm-table-cell sorting_1">
                                                                    <em className="text-muted">{earn}</em>
                                                                </td>
                                                                <td className="d-none d-sm-table-cell">
                                                                    <span className="text-muted">{coins}</span>
                                                                </td>
                                                                <td className="d-none d-sm-table-cell">
                                                                    <span className="text-muted">-{dealCoins}</span>
                                                                </td>
                                                                <td className="d-none d-sm-table-cell">
                                                                    <span className="text-muted">-{price}</span>
                                                                </td>
                                                                <td className="d-none d-sm-table-cell">
                                                                    <span className={`badge badge-${action === "pending" ? "warning" : "danger"}`}>{action}</span>
                                                                </td>
                                                                <td>
                                                                    <em className="text-muted">{date}</em>
                                                                </td>
                                                                <td className="text-center">
                                                                    <div className="btn-group">
                                                                        <button type="button" className="btn btn-success" onClick={() => this.onHandleApprove(id)}>
                                                                            <i className="fa fa-coins" /> Approve
                                                                        </button>
                                                                        <button type="button" className="btn btn-danger" onClick={() => this.onHandleCancel(id)}>
                                                                            <i className="fa fa-times" /> Decline
                                                                        </button>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                        );
                                                    }) : null
                                            }
                                        </tbody>
                                    </table>
                                    {
                                        isLoading ?
                                            <div className="d-flex justify-content-center">
                                                <h5>Loding now...</h5>
                                            </div>
                                            : null
                                    }
                                    {
                                        !isLoading && transactions.length === 0 ?
                                            <div className="d-flex justify-content-center">
                                                <h5>No withdraw data in database</h5>
                                            </div>
                                            : null
                                    }
                                </div>
                            </div>
                            {/* Here is pagination */}
                            {/* <div className="row">
                                <div className="col-sm-12 col-md-5">
                                    <div className="dataTables_info" id="DataTables_Table_0_info" role="status" aria-live="polite">Page
                                        <strong>1</strong> of <strong>4</strong>
                                    </div>
                                </div>
                                <div className="col-sm-12 col-md-7">
                                    <div className="dataTables_paginate paging_simple_numbers" id="DataTables_Table_0_paginate">
                                        <ul className="pagination">
                                            <li className="paginate_button page-item previous disabled"
                                                id="DataTables_Table_0_previous">
                                                <a href="/" data-dt-idx={0} tabIndex={0} className="page-link">
                                                    <i className="fa fa-angle-left" />
                                                </a>
                                            </li>
                                            <li className="paginate_button page-item active">
                                                <a href="/" data-dt-idx={1} tabIndex={0} className="page-link">1</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="/" data-dt-idx={2} tabIndex={0} className="page-link">2</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="/" data-dt-idx={3} tabIndex={0} className="page-link">3</a>
                                            </li>
                                            <li className="paginate_button page-item ">
                                                <a href="/" data-dt-idx={4} tabIndex={0} className="page-link">4</a>
                                            </li>
                                            <li className="paginate_button page-item next" id="DataTables_Table_0_next">
                                                <a href="/" data-dt-idx={5} tabIndex={0} className="page-link">
                                                    <i className="fa fa-angle-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                         */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}