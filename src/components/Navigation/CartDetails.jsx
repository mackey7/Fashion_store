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
                    {this.props.cart.length ?
                        (<table className="cart-details--table" >
                            <thead>
                                <tr>
                                    <th> </th>
                                    <th>
                                        Name
                                    </th>
                                    <th>Price for one </th>
                                    <th> Quantity</th>
                                    <th>
                                        Expense
                                    </th>
                                </tr>
                            </thead>
                            <tbody >
                                {this.props.cart.map((item, index) => (
                                    <tr key={index} >
                                        <td><img src={item.img} alt={item.alt} /></td>

                                        <td>
                                            <p>{item.name}</p>
                                        </td>

                                        <td>
                                            {item.price}
                                        </td>
                                        <td>

                                            {item.quantity}
                                        </td>
                                        <td>
                                            <span> {item.price * item.quantity}{item.currency}</span>
                                            <span className="delete" onClick={() => { this.handleRemove(item.id) }}><i className="far fa-trash-alt"></i></span>
                                        </td>
                                    </tr>

                                ))}
                            </tbody></table>) : (<p className="cart-details--noProducts"> No products</p>)}



                </div>
                <div className="cart-details--summary">
                    <table>
                        <tbody>
                            <tr>
                                <td>Shipping</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Total amount </td>
                                <td>{this.props.cartTotal} {this.props.products[0].currency}</td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/cart">Cart</Link>
                </div>

            </div >


        )
    }
}
const mapStateToProps = state => {
    return {
        products: state.products,
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