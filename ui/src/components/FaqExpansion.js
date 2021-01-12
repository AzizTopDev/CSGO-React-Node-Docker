import React, { Component } from 'react';

export default class FaqExpansion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render() {
        const { title, content } = this.props;
        return (
            <div className="col-md-6 mb-2">
                <div className="border-rounded border-primary py-2 px-3">
                    <div className="d-flex">
                        <h4 className="font-w700 text-primary mb-0 faq-headline">{title}</h4>
                        <img
                            className="ml-auto faq-collapse-img"
                            src={this.state.open ? '/assets/media/photos/angle-up.png' : '/assets/media/photos/angle-down.png'}
                            onClick={() => { this.setState({ open: !this.state.open }); }}
                            alt="faq collapse button"
                        />
                    </div>
                    <div className={this.state.open ? "panel-collapse" : "panel-collapse panel-close"}>
                        <p className="font-w400 font-size-sm text-black my-3">
                            {content}
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}