import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return (
            <div className="bg-black">
                <div className="content content-full d-flex">
                    <div className="font-w400 font-size-sm text-white text-uppercase">@ 2020 Name</div>
                    <div className="ml-auto font-w400 font-size-sm text-white">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><span className="mr-3 text-white font-size-base"><i className="fab fa-facebook-f"></i></span></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><span className="mr-3 text-white font-size-base"><i className="fab fa-twitter"></i></span></a>
                    </div>
                </div>
            </div>
        );
    }
}