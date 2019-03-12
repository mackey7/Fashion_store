import React, { Component } from 'react';
import Product from './Product.jsx';
import './Products.scss'

export default class Products extends Component {
    render() {
        return (
            <section className="products-container">
                {this.props.product.map((item, index) => (
                    <Product
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        currency={item.currency}
                        quantity={item.quantity}
                        alt={item.alt}
                    />
                ))}
            </section>
        )
    }
}