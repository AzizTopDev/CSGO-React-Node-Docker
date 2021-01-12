import React, { Component } from 'react';
import axios from '../util/Api';
import { toastr } from 'react-redux-toastr';

export default class CreateGame extends Component {
    _isMounted = false;
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            difficulty: "",
            fee: null,
            prize: null
        };

    }
    onHandleClick = () => {
        const { name, difficulty, fee, prize } = this.state;
        if(name !== "" && difficulty !== "" && fee !== "" && prize !== "") {
            axios.post('/admin/game/create', { name, difficulty, fee, prize }).then((res) => {
                console.log(" Created GAME response ---", res);
                toastr.success('Congrates!', 'New game was created successfully !');
            }).catch(error => {
                toastr.error('Error during game creation !');
            });
        } else {
            toastr.error('Invalid information !');
        }
    }
    render() {
        return (
            <div className="content content-full">
                <div className="block block-rounded block-bordered">
                    {/* Block Header */}
                    <div className="block-header block-header-default">
                        <h3 className="block-title">
                            <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Game Info</font></font>
                        </h3>
                    </div>
                    {/* Block Content */}
                    <div className="block-content">
                        <div className="px-3">

                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-2 my-auto">
                                    <span className="text-muted">Name</span>
                                </div>
                                <div className="col-lg-5">
                                    <input type="text" className="form-control" value={this.state.name} onChange={(ev) => this.setState({ name: ev.target.value })} />
                                </div>
                                <div className="col-lg-5 my-auto">
                                    <span className="text-muted">The name of game (ex: Deathmatch II)</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-2 my-auto">
                                    <span className="text-muted">Difficulty</span>
                                </div>
                                <div className="col-lg-5">
                                    <input type="text" className="form-control" value={this.state.difficulty} onChange={(ev) => this.setState({ difficulty: ev.target.value })} />
                                </div>
                                <div className="col-lg-5 my-auto">
                                    <span className="text-muted">The level of game (entry, normal, expert and custom string)</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-2 my-auto">
                                    <span className="text-muted">Entry fee</span>
                                </div>
                                <div className="col-lg-5">
                                    <input type="number" className="form-control" value={this.state.fee} onChange={(ev) => this.setState({ fee: ev.target.value })} />
                                </div>
                                <div className="col-lg-5 my-auto">
                                    <span className="text-muted">Amount of coins to pay out to register game</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row push">
                                <div className="col-lg-2 my-auto">
                                    <span className="text-muted">Prize</span>
                                </div>
                                <div className="col-lg-5">
                                    <input type="number" className="form-control" value={this.state.prize} onChange={(ev) => this.setState({ prize: ev.target.value })} />
                                </div>
                                <div className="col-lg-5 my-auto">
                                    <span className="text-muted">Amount of coins winnters will receive</span>
                                </div>
                            </div>
                            {/* row */}
                            <div className="row mr-3 my-4">
                                <button type="button" className="btn btn-square btn-hero-primary ml-auto"
                                    onClick={this.onHandleClick}
                                >
                                    <font style={{ verticalAlign: 'inherit' }}>
                                        <font style={{ verticalAlign: 'inherit' }}>Create Game</font>
                                    </font>
                                </button>
                            </div>
                        </div >
                    </div>
                </div>
            </div>
        );
    }
}