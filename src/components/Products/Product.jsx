import React, { Component } from 'react';
import './Product.scss'

export default class Products extends Component {
    render() {
        return (
            <div className="product-container">
                <figure>
                    <img src="../../images/dress.png" alt="" />
                </figure>
                <span>Nadia dress</span>
                <span>$64.95</span>
                <input type="button" value="add to cart +" />
            </div>
        )
    }
}