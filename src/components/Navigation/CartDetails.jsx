import React, { Component } from 'react';

export default class CartDetails extends Component {
    render() {
        return (
            <div id="item" class="cart-details" >
                <p class="cart-details--title">My Cart</p>
                <div class="cart-details--item">
                    <table >
                        {this.props.cart.map((item, index) => (
                            <tr key={index}>
                                <td><img src={item.img} alt={item.alt} /></td>

                                <td>
                                    <p>{item.name}</p>
                                    <span>{item.price}</span>
                                    <span>1</span>
                                </td>

                                <td>
                                    <span>300 PLN</span>
                                    <span>Usuń</span>
                                </td>
                            </tr>
                        ))}

                    </table>

                </div>
                <div class="cart-details--summary">
                    <table>
                        <tr>
                            <td>Przesyłka</td>
                            <td>gratis</td>
                        </tr>
                        <tr>
                            <td>Łączna kwota</td>
                            <td>304,95 PLN</td>
                        </tr>
                    </table>
                    <a href="#">CART</a>
                </div>
            </div >


        )
    }
}
