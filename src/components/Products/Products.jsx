import React, { Component } from 'react';
import Product from './Product.jsx';
import './Products.scss'

export default class Products extends Component {
    render() {
        return (
            <section className="products-container">
                <Product />
                <Product />
                <Product />
                <Product />
            </section>
        )
    }
}