
import React, { Component } from "react";
import "./Product.scss";

const Product = props => {
    console.log(props.id);
    return (
        <div className="product-container" >
            <figure>
                <img src={props.img} alt={props.alt} />
            </figure>
            <span>{props.name}</span>
            <span>
                {props.price} {props.currency}
            </span>
            <input onClick={() => props.handleClick(props.id)} type="button" value="add to cart +" />
        </div>
    );
};

export default Product;
