import React, { Component } from 'react';
import CartDetails from './CartDetails.jsx';
import './Navigation.scss'
import { connect } from "react-redux";
class Navigation extends Component {
    state = {
        cartDetails: false,
    }
    handleClick = () => {
        this.setState(state => ({
            cartDetails: !state.cartDetails
        })

        )
    }
    render() {
        let productsLenght = this.props.cart.length + " Items"
        return (
            <nav className="top-navigation">
                <span className="top-navigation--logo">LOGO</span>
                <ul>
                    <li><a href="">new</a></li>
                    <li><a href="">designers</a></li>
                    <li><a href="">women</a></li>
                    <li><a href="">men </a></li>
                    <li><a href="">clearence</a></li>
                </ul>

                <div className="bar-cart-container">
                    <div onClick={this.handleClick} className="bar-cart">
                        <span>Your cart</span>
                        <i className="fas fa-sort-down"></i>
                    </div>

                    <div className="bar-expense">
                        <i className="fas fa-shopping-bag"></i>
                        <div>
                            <span> {this.props.cart.length ? productsLenght : "No products"} </span>
                            <span>$0</span>
                        </div>

                    </div>
                    {this.state.cartDetails ?
                        <CartDetails /> : null}


                </div>

            </nav >
        )
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart,

    };
};


export default connect(
    mapStateToProps

)(Navigation);