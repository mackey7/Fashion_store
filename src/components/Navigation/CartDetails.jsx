import React from 'react';

const CartDetails = () => {
    return (
        <div id="item" class="cart-details" >
            <p class="cart-details--title">My Cart</p>
            <div class="cart-details--item">
                <table >
                    <tr>
                        <td><img src=" http://zow.lublin.eu/wp-content/themes/the-wp/images/slider/slider4.jpg" alt="" /></td>

                        <td>
                            <p>Nazwa produktu</p>
                            <span>cena</span>
                            <span>1</span>
                        </td>

                        <td>
                            <span>300 PLN</span>
                            <span>Usuń</span>
                        </td>
                    </tr>
                    <tr>
                        <td><img src=" http://zow.lublin.eu/wp-content/themes/the-wp/images/slider/slider4.jpg" alt="" /></td>

                        <td>
                            <p>Nazwa produktu</p>
                            <span>cena</span>
                            <span>1</span>
                        </td>

                        <td>
                            <span>300 PLN</span>
                            <span>Usuń</span>
                        </td>
                    </tr>
                    <tr>
                        <td><img src=" http://zow.lublin.eu/wp-content/themes/the-wp/images/slider/slider4.jpg" alt="" /></td>

                        <td>
                            <p>Nazwa produktu</p>
                            <span>cena</span>
                            <span>1</span>
                        </td>

                        <td>
                            <span>300 PLN</span>
                            <span>Usuń</span>
                        </td>
                    </tr>
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
export default CartDetails