import React, { Component } from 'react';

export default class SliderLeftArrow extends Component {
    render() {
        return (
            <a
                href="#"
                className="slider_arrow-left"
                onClick={this.props.onClick}
            >
                <span className="fa fa-3x fa-angle-left" />
            </a>
        )
    }
}