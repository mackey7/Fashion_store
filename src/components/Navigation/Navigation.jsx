import React, { Component } from 'react';
import './Navigation.scss'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="top-navigation">
                <p> Logo</p>
                <ul>
                    <li><a href="">new</a></li>
                    <li><a href="">designers</a></li>
                    <li><a href="">women</a></li>
                    <li><a href="">men </a></li>
                    <li><a href="">clearence</a></li>
                </ul>
                <div>
                    <div className="bar-cart">
                        <span>Your cart</span>
                        <i class="fas fa-sort-down"></i>
                    </div>
                    <div className="bar-expense">
                        <i class="fas fa-shopping-bag"></i>
                        <div>
                            <span>0 ITEMS</span>
                            <span>$0</span>
                        </div>

                    </div>
                </div>
            </nav>
        )
    }
}