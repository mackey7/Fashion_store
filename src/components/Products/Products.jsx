import React, { Component } from "react";

import "./Products.scss";

const Products = props => {
    return (
        <section className="products-container">
            {props.product.map((item, index) => (
                <div key={item.id} className="product-container" >
                    <figure>
                        <img src={item.img} alt={item.alt} />
                    </figure>
                    <span>{item.name}</span>
                    <span>
                        {item.price} {item.currency}
                    </span>
                    <input onClick={() => props.handleClick(item.id)} type="button" value="add to cart +" />
                </div>
            ))}
        </section>
    );
};

export default Products;