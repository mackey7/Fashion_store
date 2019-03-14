import React, { Component } from 'react';
import './Product.scss'

export default class Products extends Component {
    render() {
        return (
            <div className="product-container" id={this.props.id}>
                <figure>
                    <img src={this.props.img} alt={this.props.alt} />
                </figure>
                <span>{this.props.name}</span>
                <span>{this.props.price}{" "}{this.props.currency}</span>
                <input onClick={this.props.onClick} type="button" value="add to cart +" />
            </div>
        )
    }
}