import React, { Component } from 'react';
import { connect } from 'react-redux'
import { removeItem } from "../../actions/actions";
import './cart.scss';

class Cart extends Component {
    handleRemove = id => {
        this.props.removeItem(id);
    };
    render() {
        return (

            <div className="CartContainer" >
                <h2>My Account</h2>
                {this.props.cart.length ?
                    (this.props.cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            <img className="cart-item__image" src={item.img} alt={item.alt} />


                            <p className="cart-item__name">{item.name}</p>
                            <span className="cart-item__product-price">
                                Price for one product: {item.price}{" "}{item.currency}</span>
                            <span className="cart-item__quantity">
                                Amount of products: {item.quantity}</span>

                            <span className="cart-item__expense">Expense: {item.price * item.quantity}{" "}{item.currency}</span>
                            <span className="cart-item__delete" onClick={() => { this.handleRemove(item.id) }}><i className="far fa-trash-alt"></i></span>


                        </div>

                    ))) : (<p className="cart-item__none"> No products</p>)}


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
)(Cart);
