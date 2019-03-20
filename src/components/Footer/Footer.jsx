import React, { Component } from 'react';
import './Footer.scss'

export default class Footer extends Component {
    render() {
        return (
            <nav className="footer-menu">
                <ul>
                    <li>
                        <a href="#">Privacy & Cookies |</a>
                        </li>
                        <li>
                        <a href="#">Terms & Conditions |</a>
                           </li>
                           <li>
                        <a href="#">Accessibility |</a>
                           </li>
                           <li>
                        <a href="#">Store Directory |</a>
                           </li>
                           <li>
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