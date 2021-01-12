import React, { Component } from 'react';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import axios from '../util/Api';
import { Link } from 'react-router-dom';
import FaqExpansion from '../components/FaqExpansion';
import GameCard from '../components/GameCard';
import { userSignOut } from '../actions';

const content = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam";
const title = "Lorem ipsum dolor sit";
class Home extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            show: false
        };
        this.wrapperRef = React.createRef();
    }
    handleClickOutside = (event) => {
        if (this.wrapperRef.current && !this.wrapperRef.current.contains(event.target)) {
            this.setState({ show: false });
        }
    }
    componentDidMount() {
        this._isMounted = true;
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    render() {
        const { authUser } = this.props;
        return (
            <React.Fragment>
                <div id="page-container" className="page-header-dark page-header-glass main-content-narrow side-trans-enabled">
                    <header id="page-header">
                        {/* <!-- Header Content --> */}
                        <div className="content-header">
                            {/* <!-- Left Section --> */}
                            <div>
                                <Link to="/" className="text-white font-size-lg px-4">LOGO</Link>
                            </div>
                            {/* <!-- Right Section --> */}
                            <div>
                                {authUser ?
                                    <div className="d-flex" style={{ position: "relative" }}>
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
                                    : <Link to="/sign-in" className="btn btn-rounded btn-primary" ><span className="text-white font-w700 mx-4">Sign In</span></Link>
                                }
                            </div>
                        </div>
                    </header>

                    <main id="main-container" onClick={() => this.setState({ show: false })}>
                        {/* <!-- Brand --> */}
                        <div style={{ backgroundSize: "cover", width: "100%", backgroundImage: "url('assets/media/photos/bg-brand.png')" }}>
                            <div className="bg-transparent">
                                <div className="content content-full text-center brand-text">
                                    <h1 className="font-w700 text-white brand-heading">
                                        Lorem ipsum dolor sit amet, consetetur
                                    </h1>
                                    <h4 className="font-w400 text-white brand-subheading">
                                        Lorem ipsum dolor sit amet, consetetur
                                    </h4>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Play games --> */}
                        <div className="bg-white">
                            <div className="content content-full">
                                <div className="block-content">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-4 col-xl-5">
                                            <h3 className="font-w700 text-black text-uppercase mb-3">
                                                <span className="underline-blue">Play</span> games
                                            </h3>
                                            <h5 className="font-w700 text-black mb-2">Lorem ipsum dolor site amet</h5>
                                            <p className="font-w400 font-size-sm text-black">
                                                Lorem ipsum dolor site amet, saidpscing elitr, sed diam nonumy eirmod
                                                tempor invidunt ut et dolore magana aliqyyam erat, sed diam voluptua. At vero
                                                eos et accusam et justo duo dolores et ea renum. Stet clita kasd guabergren, no sea
                                                takimata sanctus est Lorem ipsum dolor sitt amet. Lorem ipsum dolor sit amet,
                                                consetetur saidpscing elitr, sed diam nomumy eimod tempor invidunt ut labore at
                                                dolore magna aliquyam ert, sed diam
                                            </p>
                                            <button type="button" className="btn btn-rounded btn-primary mb-3"><span
                                                className="text-white font-w700 mx-4 text-uppercase ">JOIN</span></button>
                                        </div>
                                        <div className="col-md-12 col-lg-8 col-xl-7">
                                            <div className="row justify-content-center">
                                                <div className="col-md-4">
                                                    {/* <!-- game card item --> */}
                                                    <GameCard />
                                                </div>
                                                {/* <!-- end item --> */}
                                                {/* <!-- game card item --> */}
                                                <div className="col-md-4">
                                                    <GameCard />
                                                </div>
                                                {/* <!-- end item --> */}
                                                {/* <!-- game card item --> */}
                                                <div className="col-md-4">
                                                    <GameCard />
                                                </div>
                                                {/* <!-- end item --> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- intro 1 image --> */}
                        <div className="intro-image" style={{ backgroundImage: "url('/assets/media/photos/asset-1.png')" }}>
                            <div className="content content-full intro-content">
                                <div className="text-center">
                                    <h1 className="font-w700 my-2 text-white">Lorem ipsum dolor sit amet, consetetur</h1>
                                    <h2 className="font-w700 my-2 text-white">Lorem ipsum dolor sit amet, consetetur</h2>
                                </div>
                            </div>
                        </div>

                        {/* <!-- how it works --> */}
                        <div className="bg-white how-section" style={{ backgroundImage: "url('/assets/media/photos/how-bg.png')" }}>
                            <div className="content content-full">
                                <div className="block-content">
                                    <div className="row py-3">
                                        <div className="col-12">
                                            <h3 className="font-w700 text-black text-uppercase mb-3">
                                                <span className="underline-blue">How</span> it works
                                </h3>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {/* <!-- item 1 --> */}
                                        <div className="col-md-12 col-lg-4 col-12">
                                            <div className="row justify-content-center mb-4">
                                                <div className="how-item"
                                                    style={{ backgroundImage: "url('/assets/media/photos/triangle-bg.png')" }}>
                                                    <h3 className="font-w700 text-white text-center text-uppercase mt-2 mb-3">Play<br />games</h3>
                                                </div>
                                            </div>
                                            <div className="row px-5 mb-4">
                                                <h4 className="font-w700 text-black mb-2">Lorem ipsum dolor sit</h4>
                                                <p className="font-w400 font-size-sm text-black">
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                                                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                                                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                                    labore et dolore magna aliquyam erat, sed diam
                                            </p>
                                            </div>
                                        </div>
                                        {/* <!-- item 2 --> */}
                                        <div className="col-md-12 col-lg-4 col-12">
                                            <div className="row justify-content-center mb-4">
                                                <div className="how-item" style={{ backgroundImage: "url('/assets/media/photos/triangle-bg.png')" }}>
                                                    <h3 className="font-w700 text-white text-center text-uppercase mt-2 mb-3">Play<br />games</h3>
                                                </div>
                                            </div>
                                            <div className="row px-5 mb-4">
                                                <h4 className="font-w700 text-black mb-2">Lorem ipsum dolor sit</h4>
                                                <p className="font-w400 font-size-sm text-black">
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                                                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                                                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                                    labore et dolore magna aliquyam erat, sed diam
                                                </p>
                                            </div>
                                        </div>
                                        {/* <!-- item 3 --> */}
                                        <div className="col-md-12 col-lg-4 col-12">
                                            <div className="row justify-content-center mb-4">
                                                <div className="how-item" style={{ backgroundImage: "url('/assets/media/photos/triangle-bg.png')" }}>
                                                    <h3 className="font-w700 text-white text-center text-uppercase mt-2 mb-3">Play<br />
                                            games</h3>
                                                </div>
                                            </div>
                                            <div className="row px-5 mb-4">
                                                <h4 className="font-w700 text-black mb-2">Lorem ipsum dolor sit</h4>
                                                <p className="font-w400 font-size-sm text-black">
                                                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                                                    tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                                                    vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                                                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                                                    amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                                                    labore et dolore magna aliquyam erat, sed diam
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- intro 2 image --> */}
                        <div className="intro-image" style={{ backgroundImage: "url('/assets/media/photos/asset-2.png')" }}>
                            <div className="content content-full intro-content">
                                <div className="text-center">
                                    <h1 className="font-w700 my-2 text-white">Lorem ipsum dolor sit amet, consetetur</h1>
                                    <h2 className="font-w700 my-2 text-white">Lorem ipsum dolor sit amet, consetetur</h2>
                                </div>
                            </div>
                        </div>

                        {/* <!-- FAQ --> */}
                        <div className="bg-white">
                            <div className="content content-full">
                                <div className="block-content">
                                    <div className="row py-3">
                                        <div className="col-12">
                                            <h3 className="font-w700 text-black text-uppercase mb-3">
                                                <span className="underline-blue">FAQ</span>
                                            </h3>
                                        </div>
                                    </div>
                                    {/* <!-- FAQ row 1 --> */}
                                    <div className="row">
                                        <FaqExpansion title={title} content={content} />
                                        <FaqExpansion title={title} content={content} />
                                        <FaqExpansion title={title} content={content} />
                                        <FaqExpansion title={title} content={content} />
                                        <FaqExpansion title={title} content={content} />
                                        <FaqExpansion title={title} content={content} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </main>
                </div>

            </React.Fragment>
        );
    }
}
const mapStateToProps = ({ auth }) => {
    const { authUser } = auth;
    return { authUser };
};
const mapDispatchToProps = { userSignOut };
export default connect(mapStateToProps, mapDispatchToProps)(Home);