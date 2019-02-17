import React, { Component } from 'react';
import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <nav className="footer-menu">
                <ul>
                    <li>
                        <a href="#">Privacy & Cookies |</a>
                        <a href="#">Terms & Conditions |</a>
                        <a href="#">Accessibility |</a>
                        <a href="#">Store Directory |</a>
                        <a href="#">About Us</a>

                    </li>
                </ul>
                <div className='copyright'>
                    <span>LookShop.com </span>
                    <span>All Rights Reserved</span>
                </div>
            </nav >
        )
    }
}