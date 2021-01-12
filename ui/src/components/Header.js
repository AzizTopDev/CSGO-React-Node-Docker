import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignOut } from '../actions';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false 
        };
        this.wrapperRef = React.createRef();
    }
    handleClickOutSide = (event) => {
        if(this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            this.setState({show: false});
        }
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutSide);
    }
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutSide);
    }
    render() {
        const { authUser } = this.props.auth;
        return (
            <header id="page-header">
                {/* <!-- Header Content --> */}
                <div className="content-header">
                    {/* <!-- Left Section --> */}
                    <div>
                        <Link to="/" className="text-white font-size-lg px-4">LOGO</Link>
                        <button className="btn btn-outline text-white d-md-none">
                            <i className="fa fa-fw fa-bars"></i>
                        </button>
                        <div className="d-none d-md-inline-block">
                            <Link to="/home" className="text-white font-size-base pr-3">Home</Link>
                            <Link to="/pr/games" className="text-white font-size-base pr-3">Games</Link>
                            <Link to="/pr/affiliate" className="text-white font-size-base pr-3">Affiliate</Link>
                        </div>
                    </div>
                    {/* <!-- Right Section --> */}
                    <div>
                    { authUser ?
                        <div className="d-flex" style={{position: "relative"}}>
                            <button type="button" className="btn btn-rounded btn-outline-white" onClick={() => this.props.history.push('/pr/deposit')}>
                                <span className="d-flex text-white font-w700">
                                <img className="mr-3" src="/assets/media/photos/coin.png" alt="" />{authUser.coins} 
                                                <img className="ml-3" src="/assets/media/photos/plus-circle.png" alt="" />
                                </span>
                            </button>
                            <div className="vertical-divider"></div>
                            <div ref={this.wrapperRef}>
                                <button className="btn btn-outline d-md-none" onClick={() => this.setState({ show: !this.state.show })}>
                                    <i className="fa fa-fw fa-user text-white my-auto"></i>
                                </button>
                                <div className="d-none d-md-inline-block">
                                    <img className="img-avatar img-avatar-thumb img-avatar-size mr-2" src={`${authUser.image}`} alt="" />
                                    <button className="btn btn-outline text-white my-auto" onClick={() => this.setState({ show: !this.state.show })}>{authUser.username}
                                        <i className="fa fa-fw fa-angle-down ml-1"></i>
                                    </button>
                                </div>
                                <div className={`menu-position dropdown-menu dropdown-menu-right p-0${this.state.show ? " show" : ""}`}>
                                    <div className="bg-primary-darker rounded-top font-w600 text-white text-center p-3">
                                        User Options
                                    </div>
                                    <div className="p-2">
                                        <Link className="dropdown-item" to="/pr/stats">
                                            <i className="far fa-fw fa-file-alt mr-1"></i> Stats
                                        </Link>
                                        <Link className="dropdown-item" to="/pr/setting">
                                            <i className="far fa-fw fa-building mr-1"></i> Settings
                                        </Link>
                                        <div role="separator" className="dropdown-divider"></div>

                                        <Link className="dropdown-item" to="/pr/games">
                                            <i className="fa fa-gamepad mr-1"></i> Games
                                        </Link>
                                        <Link className="dropdown-item" to="/pr/affiliate">
                                            <i className="fa fa-qrcode mr-1"></i> Affiliate
                                        </Link>
                                        <Link className="dropdown-item" to="/pr/deposit">
                                            <i className="fa fa-coins mr-1"></i> Deposit
                                        </Link>
                                        <Link className="dropdown-item" to="/pr/withdraw">
                                            <i className="fa fa-dollar-sign mr-1"></i> Withdraw
                                        </Link>
                                        <Link className="dropdown-item" to="/pr/transaction">
                                            <i className="fa fa-file-invoice-dollar mr-1"></i> Transaction
                                        </Link>

                                        <div role="separator" className="dropdown-divider"></div>
                                        <button className="btn dropdown-item" onClick={this.props.userSignOut}>
                                            <i className="far fa-fw fa-arrow-alt-circle-left mr-1"></i> Log Out
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        : null
                    }
                    </div>
                </div>
            </header>

        );
    }
}
Header.propTypes = {
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = ({ auth }) => ({ auth });
const mapDispatchToProps = { userSignOut };
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));