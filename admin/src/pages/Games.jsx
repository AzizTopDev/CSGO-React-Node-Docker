import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../util/Api';
import { toastr } from 'react-redux-toastr';

export default class Games extends Component {
    _isMounted = false;
    state = {
        isLoading: false,
        games: []
    };
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.setState({ isLoading: true });
            axios.get('/admin/game')
                .then(({data}) => {
                    this.setState({
                        isLoading: false,
                        games: data.games
                    });
                })
                .catch(err => {
                    this.setState({ isLoading: false });
                    toastr.error("Error during get game list");
                })
        }
    }
    render() {
        const { isLoading, games } = this.state;
        return (
            <div className="content content-full">
                <div className="block block-rounded block-bordered">
                    <div className="block-header block-header-default">
                        <h3 className="block-title">Game List</h3>
                        <div className="block-options">
                            <div className="block-options-item">
                                <Link to="/pr/create-game" className="btn btn-square btn-hero-danger">
                                    <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Create New Game</font>
                                    </font>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="block-content">
                        {
                            isLoading ?
                                <div className="d-flex justify-content-center">
                                    <h5>Loding now...</h5>
                                </div>
                                : (
                                    games && games.length ?
                                        <div className="table-responsive">
                                            <table className="table table-vcenter table-hover table-striped">
                                                <thead className="thead-dark">
                                                    <tr>
                                                        <th className="text-center" style={{ width: "80px" }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}># ID</font>
                                                            </font>
                                                        </th>
                                                        <th>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Game Name</font>
                                                            </font>
                                                        </th>
                                                        <th>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Difficulty</font>
                                                            </font>
                                                        </th>
                                                        <th>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Entry Fee( Coins )</font>
                                                            </font>
                                                        </th>
                                                        <th>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Prize( Coins )</font>
                                                            </font>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {games.map((game, index) => {
                                                        const { name, difficulty, fee, prize } = game;
                                                        return <tr key={index}>
                                                            <th className="text-center" scope="row">
                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                    <font style={{ verticalAlign: 'inherit' }}>{index + 1}</font>
                                                                </font>
                                                            </th>
                                                            <td className="font-w600">
                                                                <span>{name}</span>
                                                            </td>
                                                            <td className="font-w600">
                                                                <span className="text-danger">{difficulty}</span>
                                                            </td>
                                                            <td className="font-w600">
                                                                <span>{fee}</span>
                                                            </td>
                                                            <td className="font-w600">
                                                                <span>{prize}</span>
                                                            </td>
                                                        </tr>
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                        : <div className="d-flex justify-content-center">
                                            <h5>No running games yet...</h5>
                                        </div>
                                )
                        }


                    </div>
                </div>
            </div>
        );
    }
}