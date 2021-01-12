import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import GameCard from '../components/GameCard';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { connect } from 'react-redux';
import { getGameList } from '../actions';

class Games extends Component {
    _isMounted = false;
    componentDidMount() {
        this._isMounted = true;
        if(this._isMounted) {
            this.props.getGameList();
        }
    }
    render() {
        console.log("__ gameList ___", this.props.gameList);
        return (
            <div id="page-container" className="page-header-dark page-header-blue main-content-narrow side-trans-enabled">
            <Header />
            <main id="main-container">
               
                {/* <!-- Use the partner code --> */}
                <div className="bg-white">
                    <div className="content content-full mt-6">
                        <div className="block-content">
                            <div className="row py-3 justify-content-center">
                                <h3 className="font-w700 text-black text-uppercase">
                                    Play games
                                </h3>
                            </div>
                            {/* <!-- first row --> */}
                            <div className="row mx-4 mb-4 justify-content-around">
                                <GameCard />
                                <GameCard />
                                <GameCard />
                                <GameCard />
                                <GameCard />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- footer --> */}
                <Footer />
            </main>
        </div>
        );
    }
}
const mapStateToProps = ({ game }) => {
    const { gameList } = game;
    return { gameList };
};

export default connect(mapStateToProps, { getGameList })(Games);