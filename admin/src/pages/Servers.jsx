import React, { Component } from 'react';
import axios from '../util/Api';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import { toastr } from 'react-redux-toastr';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root');
export default class Servers extends Component {
    _isMounted = false;
    state = {
        isLoading: true,
        game_servers: [],
        serverId: null,
        modalIsOpen: false,
    };
    componentDidMount() {
        this._isMounted = true;
        if (this._isMounted) {
            this.getSeverDetails();
        }
    }
    getSeverDetails = () => {
        this.setState({ isLoading: true });
        axios.get('/admin/server').then(({ data }) => {
            console.error(" get server : ", data)
            this.setState({
                isLoading: false,
                game_servers: data.game_servers
            });
        })
            .catch(err => {
                this.setState({ isLoading: false });
                toastr.error('Get severs error !');
            });
    }
    openModal = (id) => {
        this.setState({
            isModalOpen: true,
            serverId: id
        });
    }
    afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }
    closeModal = () => {
        this.setState({
            isModalOpen: false,
            serverId: null
        });
    }
    onHandleDeleteRequest = () => {
        const { serverId } = this.state;
        if (serverId) {
            console.log(" &&&&& server ID &&&", serverId);
            axios.get(`/admin/server/delete/${serverId}`)
                .then((res) => {
                    toastr.success('Done', 'Sever was delete successfully !');
                    setTimeout(() => {
                        this.getSeverDetails();
                    }, 3000);
                })
                .catch(() => {
                    toastr.error('Sever deleting failed !');
                });
        } else {
            toastr.warning('Sever id was not set !');
        }
    }
    onHandleStartRequest = (serverId) => {
        if (serverId) {
            console.log(" start server request ");
            axios.get(`/admin/server/start/${serverId}`)
                .then((res) => {
                    toastr.success('Success', 'Sever is running now !');
                    setTimeout(() => {
                        this.getSeverDetails();
                    }, 3000);
                })
                .catch(() => {
                    toastr.error('Sever deleting failed !');
                });

        } else {
            toastr.warning('Sever id was not set !');
        }
    }
    onHandleStopRequest = (serverId) => {
        if (serverId) {
            axios.get(`/admin/server/stop/${serverId}`)
                .then((res) => {
                    toastr.success('Done', 'Sever was stopped now !');
                    setTimeout(() => {
                        this.getSeverDetails();
                    }, 3000);
                })
                .catch(() => {
                    toastr.error('Sever deleting failed !');
                });
        } else {
            toastr.warning('Sever id was not set !');
        }
    }
    render() {
        const { isLoading, game_servers } = this.state;
        return (
            <div className="content content-full">
                <div className="block block-rounded block-bordered">
                    <div className="block-header block-header-default">
                        <h3 className="block-title">Game Server List</h3>
                        <div className="block-options">
                            <div className="block-options-item">
                                <Link to="/pr/create-server" className="btn btn-square btn-hero-danger">
                                    <font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Create New Server</font>
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
                                    game_servers && game_servers.length ?
                                        <div className="table-responsive">
                                            <table className="table table-vcenter table-hover table-striped">
                                                <thead className="thead-dark">
                                                    <tr>
                                                        <th className="text-center" style={{ width: 50 }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}># Server ID</font>
                                                            </font>
                                                        </th>
                                                        <th>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Server Name</font>
                                                            </font>
                                                        </th>
                                                        <th>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>IP</font>
                                                            </font>
                                                        </th>
                                                        <th>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Status</font>
                                                            </font>
                                                        </th>
                                                        <th>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Game</font>
                                                            </font>
                                                        </th>
                                                        <th>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Location</font>
                                                            </font>
                                                        </th>
                                                        <th>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Players Online</font>
                                                            </font>
                                                        </th>

                                                        <th>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>MaxCost / hour</font>
                                                            </font>
                                                            <i className="fa fa-euro-sign fa-sm ml-1" />
                                                        </th>
                                                        <th>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Autostop Minutes</font>
                                                            </font>
                                                        </th>
                                                        <th className="text-center" style={{ width: 100 }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Info</font>
                                                            </font>
                                                        </th>
                                                        <th className="text-center" style={{ width: 100 }}>
                                                            <font style={{ verticalAlign: 'inherit' }}>
                                                                <font style={{ verticalAlign: 'inherit' }}>Start/Stop</font>
                                                            </font>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {game_servers.map((serverInfo, index) => {
                                                        const { id, name, ip, on, game, location, players_online, max_cost_per_hour, autostop_minutes } = serverInfo;
                                                        return <tr key={index}>
                                                            <th className="text-center" scope="row">
                                                                <font style={{ verticalAlign: 'inherit' }}>
                                                                    <font style={{ verticalAlign: 'inherit' }}>{id}</font>
                                                                </font>
                                                            </th>
                                                            <td className="font-w600">
                                                                <span>{name}</span>
                                                            </td>
                                                            <td className="font-w600">
                                                                <span>{ip}</span>
                                                            </td>
                                                            <td className="font-w600">
                                                                <span className={`${on ? "text-success" : "text-danger"} text-uppercase`}>{on ? "live" : "down"}</span>
                                                            </td>
                                                            <td className="d-none d-sm-table-cell">
                                                                <span className="badge badge-warning">
                                                                    <font style={{ verticalAlign: 'inherit' }}>
                                                                        <font style={{ verticalAlign: 'inherit' }}>{game}</font>
                                                                    </font>
                                                                </span>
                                                            </td>
                                                            <td className="font-w600 text-uppercase">
                                                                <span>{location}</span>
                                                            </td>
                                                            <td className="font-w600">
                                                                <span>{players_online}</span>
                                                            </td>
                                                            <td className="font-w600">
                                                                <span>{max_cost_per_hour}</span>
                                                            </td>
                                                            <td className="font-w600">
                                                                <span>{autostop_minutes}</span>
                                                            </td>
                                                            <td className="text-center">
                                                                <div className="btn-group">
                                                                    <Link to={`/pr/detail-server/${id}`} className="btn btn-sm btn-primary">
                                                                        <i className="fa fa-info-circle" /> Detail
                                                                </Link>
                                                                    <Link to={`/pr/update-server/${id}`} className="btn btn-sm btn-primary">
                                                                        <i className="fa fa-pencil-alt" /> Update
                                                                </Link>
                                                                    <button type="button" className="btn btn-sm btn-danger" onClick={() => {
                                                                        this.openModal(id);
                                                                    }}>
                                                                        <i className="fa fa-times" /> Delete
                                                                </button>

                                                                </div>

                                                            </td>
                                                            <td className="text-center">
                                                                <div className="btn-group">
                                                                    {
                                                                        on ?
                                                                            <button type="button" className="btn btn-warning" onClick={() => this.onHandleStopRequest(id)}>
                                                                                <i className="fa fa-stop" /> Stop
                                                                            </button>
                                                                            : <button type="button" className="btn btn-success" onClick={() => this.onHandleStartRequest(id)}>
                                                                                <i className="fa fa-play" /> Starts
                                                                            </button>
                                                                    }

                                                                </div>
                                                            </td>
                                                        </tr>
                                                    })}
                                                </tbody>
                                            </table>
                                        </div>
                                        : <div className="d-flex justify-content-center">
                                            <h5>No running server yet...</h5>
                                        </div>
                                )
                        }


                    </div>
                </div>
                <Modal
                    isOpen={this.state.isModalOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Delete Sever Modal"
                >
                    {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
                    {/* <button onClick={this.closeModal}>close</button> */}
                    <div className="block block-themed block-transparent mb-0" style={{ width: "500px" }}>
                        <div className="block-header bg-primary-dark">
                            <h3 className="block-title"><font style={{ verticalAlign: 'inherit' }}><font style={{ verticalAlign: 'inherit' }}>Sever Delete Confirm</font></font></h3>
                            <div className="block-options">
                                <button type="button" className="btn-block-option" data-dismiss="modal" aria-label="Close" onClick={this.closeModal}>
                                    <i className="fa fa-fw fa-times" />
                                </button>
                            </div>
                        </div>
                        <div className="block-content">
                            <p>
                                <font style={{ verticalAlign: 'inherit' }}>
                                    <font style={{ verticalAlign: 'inherit' }}>It will delete sever permanantly.</font>
                                </font>
                            </p>
                        </div>
                        <div className="block-content block-content-full text-right bg-light">
                            <button type="button" className="btn btn-sm btn-light" data-dismiss="modal" onClick={this.closeModal}>
                                <font style={{ verticalAlign: 'inherit' }}>
                                    <font style={{ verticalAlign: 'inherit' }}>Close</font>
                                </font>
                            </button>
                            <button type="button" className="btn btn-sm btn-primary" data-dismiss="modal" onClick={this.onHandleDeleteRequest}>
                                <font style={{ verticalAlign: 'inherit' }}>
                                    <font style={{ verticalAlign: 'inherit' }}>Agree</font>
                                </font>
                            </button>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }
}