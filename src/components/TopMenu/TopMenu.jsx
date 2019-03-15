import React, { Component } from 'react';
import SearchBar from './SerachBar.jsx';

import './topMenu.scss';

export default class TopMenu extends Component {
    constructor() {
        super();
        this.state = {
            search: false,
            menuBar: true,
        }
    }

    handleClick = () => {
        this.setState(state => ({ search: !state.search }))
    }
    diplayMenu = () => {
        this.setState(state => ({ menuBar: !state.menuBar }))
    }

    render() {
        const menuStyle = {
            display: this.state.menuBar ? 'flex' : 'none'
        }
        return (
            <div className="topMenu" >

                <a className="topMenu--telephone" href="tel:+88-23-4567"> custom care: 88-23-4567</a>
                <div onClick={this.diplayMenu} className="menu-bar">
                    {this.state.menuBar ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>}
                </div>

                <div className="topMenu-account" style={menuStyle} >
                    <select>
                        <option value="$US">$US</option>
                        <option value="pln">PLN</option>
                    </select>
                    <a href="#">  my account</a>
                    <i onClick={this.handleClick} className="fas fa-search"></i>
                    {this.state.search ? <SearchBar /> : null}
                </div>

            </div>
        )
    }
}
