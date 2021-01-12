import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Sidebar extends Component {
    render() {
        return (
            <nav id="sidebar" aria-label="Main Navigation">
                {/* Side Header (mini Sidebar mode) */}
                <div className="smini-visible-block">
                    <div className="content-header">
                        {/* Logo */}
                        <Link className="link-fx font-size-lg text-white" to="/pr/dashboard">
                            <span className="text-white">GW</span>
                        </Link>
                        {/* END Logo */}
                    </div>
                </div>
                {/* END Side Header (mini Sidebar mode) */}
                {/* Side Header (normal Sidebar mode) */}
                <div className="smini-hidden">
                    <div className="content-header justify-content-lg-center">
                        {/* Logo */}
                        <Link className="link-fx font-size-lg text-light" to="/pr/dashboard">
                            <span className="text-white">GamesWeb</span>
                        </Link>
                        {/* END Logo */}
                        {/* Options */}
                        <div className="d-lg-none">
                            {/* Close Sidebar, Visible only on mobile screens */}
                            <span className="text-white ml-2" data-toggle="layout" data-action="sidebar_close">
                                <i className="fa fa-times-circle" />
                            </span>
                            {/* END Close Sidebar */}
                        </div>
                        {/* END Options */}
                    </div>
                </div>
                {/* END Side Header (normal Sidebar mode) */}
                {/* User Info */}
                <div className="content-side content-side-full bg-black-10 text-center smini-hidden">
                    <Link className="img-link d-block mb-3" to="/pr/account-setting">
                        <img className="img-avatar img-avatar-thumb" src="/assets/media/avatars/avatar8.jpg" alt="" />
                    </Link>
                    <span className="font-w600 text-dual mr-1">
                        @Username
                    </span>
                    <span className="badge badge-pill badge-danger">Admin</span>
                </div>
                {/* END User Info */}
                {/* Side Navigation */}
                <div className="content-side content-side-full">
                    <ul className="nav-main">
                        <li className="nav-main-item">
                            <Link className="nav-main-link" to="/pr">
                                <i className="nav-main-link-icon fa fa-gamepad" />
                                <span className="nav-main-link-name">Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-main-heading">Overview</li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link" to="/pr/servers">
                                <i className="nav-main-link-icon fa fa-server" />
                                <span className="nav-main-link-name">My Servers</span>
                            </Link>
                        </li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link" to="/pr/games">
                                <i className="nav-main-link-icon fa fa-wrench" />
                                <span className="nav-main-link-name">Game Settings</span>
                            </Link>
                        </li>
                        <li className="nav-main-heading">Users &amp; Groups</li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link" to="/pr">
                                <i className="nav-main-link-icon fa fa-user" />
                                <span className="nav-main-link-name">Manage Users</span>
                            </Link>
                        </li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link" to="/pr">
                                <i className="nav-main-link-icon fa fa-users" />
                                <span className="nav-main-link-name">Manage Teams</span>
                            </Link>
                        </li>
                        <li className="nav-main-heading">Payment & Security</li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link" to="/pr/withdraw">
                                <i className="nav-main-link-icon fa fa-coins" />
                                <span className="nav-main-link-name">Withdraw Queue</span>
                            </Link>
                        </li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link" to="/pr/withdraw">
                                <i className="nav-main-link-icon fa fa-file-invoice-dollar" />
                                <span className="nav-main-link-name">Transaction History</span>
                            </Link>
                        </li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link" to="/pr">
                                <i className="nav-main-link-icon fa fa-lock" />
                                <span className="nav-main-link-name">Security</span>
                            </Link>
                        </li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link" to="/pr">
                                <i className="nav-main-link-icon fa fa-user-lock" />
                                <span className="nav-main-link-name">User Access</span>
                            </Link>
                        </li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link" to="/pr">
                                <i className="nav-main-link-icon fa fa-cog" />
                                <span className="nav-main-link-name">Account Settings</span>
                            </Link>
                        </li>
                        <li className="nav-main-heading">User interface</li>
                        <li className="nav-main-item">
                            <Link className="nav-main-link" to="/pr">
                                <i className="nav-main-link-icon si si-arrow-left" />
                                <span className="nav-main-link-name">Go to website</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* END Side Navigation */}
            </nav>
        );
    }
}