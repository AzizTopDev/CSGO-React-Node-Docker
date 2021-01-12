import React, { Component } from 'react';

export default class MainError404 extends Component {
    render() {
        return (
            <div className="content content-full">
                <div className="block block-rounded block-bordered">
                    <div className="block-content">
                        <div className="d-flex justify-content-center">
                            <h3 className="text-danger">Content Not Found Error 404</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}