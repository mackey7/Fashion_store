import React from 'react';

const CartDetails = () => {
    return (
        <div class="cart-details">
            <span>My Cart</span>
            <div class="cart-details_item">
                <figure>
                    <img src="" alt="" />
                </figure>
                <div>
                    <p>Nazwa produktu</p>
                    <span>cena</span>
                    <span>1</span>
                </div>
                <div>
                    <span>300 PLN</span>
                    <span>Usuń</span>
                </div>
            </div>
            <div>
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
        </div>


    )
}
export default CartDetails