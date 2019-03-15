import React, { Component } from 'react';
import { removeItem } from "../../actions/actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom'

class CartDetails extends Component {
    handleRemove = id => {
        this.props.removeItem(id);
    };
    render() {
        return (
            <div id="item" className="cart-details" >
                <p className="cart-details--title">My Cart</p>
                <div className="cart-details--item">

                    <table >
                        {this.props.cart.length ?
                            (this.props.cart.map((item, index) => (

                                <tbody key={index}>
                                    <tr >
                                        <td><img src={item.img} alt={item.alt} /></td>

                                        <td>
                                            <p>Name{item.name}</p>
                                            <span>
                                                Price for one product{item.price}</span>
                                            <span>
                                                Amount of products{item.quantity}</span>
                                        </td>

                                        <td>
                                            <span>Expense {item.price * item.quantity}</span>
                                            <span className="delete" onClick={() => { this.handleRemove(item.id) }}><i className="far fa-trash-alt"></i></span>
                                        </td>
                                    </tr>
                                </tbody>

                            ))) : (<p className="cart-details--noProducts"> No products</p>)}

                    </table>

                </div>
                <div className="cart-details--summary">
                    <table>
                        <tr>
                            <td>Shipping</td>
                            <td>Free</td>
                        </tr>
                        <tr>
                            <td>Total amount </td>
                            <td>{this.props.cartTotal} PLN</td>
                        </tr>
                    </table>
                    <Link to="/cart">Cart</Link>
                </div>
            </div >


        )
    }
}
const mapStateToProps = state => {
    return {
        cart: state.cart,
        cartTotal: state.cartTotal

    };
};
const mapDispatchToProps = dispatch => {
    return {
        removeItem: id => dispatch(removeItem(id))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartDetails);