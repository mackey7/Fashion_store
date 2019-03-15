import React, { Component } from 'react';
import { removeItem } from "../../actions/actions";
import { connect } from "react-redux";

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
                        {this.props.cart.map((item, index) => (

                            <tbody key={index}>
                                <tr >
                                    <td><img src={item.img} alt={item.alt} /></td>

                                    <td>
                                        <p>Nazwa{item.name}</p>
                                        <span> cena za jeden produkt{item.price}</span>
                                        <span> Liczba Produktów{item.quantity}</span>
                                    </td>

                                    <td>
                                        <span>cena łacznie {item.price * item.quantity}</span>
                                        <span onClick={() => { this.handleRemove(item.id) }}>Usuń</span>
                                    </td>
                                </tr>
                            </tbody>

                        ))}

                    </table>

                </div>
                <div className="cart-details--summary">
                    <table>
                        <tr>
                            <td>Przesyłka</td>
                            <td>gratis</td>
                        </tr>
                        <tr>
                            <td>Łączna kwota</td>
                            <td>{this.props.cartTotal} PLN</td>
                        </tr>
                    </table>
                    <a href="#">CART</a>
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