import React, { Component } from 'react';

export default class SlideDot extends Component {
    render() {
        return (
            <li>
                <a className={
                    this.props.index == this.props.activeIndex
                        ? "dot dot--active"
                        : "dot"
                }
                    onClick={this.props.onClick}
                />
            </li>
        );
    }
}