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
        if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            this.setState({ show: false });
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
                {/* Header Content */}
                <div className="content-header">
                    {/* Left Section */}
                    <div>
                        {/* Toggle Sidebar */}
                        {/* Layout API, functionality initialized in Template._uiApiLayout() */}
                        <button type="button" className="btn btn-dual mr-1" data-toggle="layout" data-action="sidebar_toggle">
                            <i className="fa fa-fw fa-bars" />
                        </button>
                        {/* END Toggle Sidebar */}
                    </div>
                    {/* END Left Section */}
                    {/* Right Section */}
                    <div>
                        {/* User Dropdown */}
                        <div className="dropdown d-inline-block">
                            <button type="button" className="btn btn-hero-warning">
                                <span className="d-none d-sm-inline ml-2">Admin Log Out</span>
                            </button>
                        </div>
                        {/* END User Dropdown */}
                    </div>
                    {/* END Right Section */}
                </div>
                {/* END Header Content */}
                {/* Header Search */}
                <div id="page-header-search" className="overlay-header bg-primary">
                    <div className="content-header">
                        <div className="w-100">
                            <div className="input-group">
                                <input type="text" className="form-control border-0" placeholder="Search your network.."
                                    id="page-header-search-input" name="page-header-search-input" />
                                <div className="input-group-append">
                                    <button type="button" className="btn btn-primary" data-toggle="layout"
                                        data-action="header_search_off">
                                        <i className="fa fa-fw fa-times-circle" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* END Header Search */}
                {/* Header Loader */}
                {/* Please check out the Loaders page under Components category to see examples of showing/hiding it */}
                <div id="page-header-loader" className="overlay-header bg-primary-darker">
                    <div className="content-header">
                        <div className="w-100 text-center">
                            <i className="fa fa-fw fa-2x fa-sun fa-spin text-white" />
                        </div>
                    </div>
                </div>
                {/* END Header Loader */}
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