import React, { Component } from 'react';
import SearchBar from './SerachBar.jsx'
import './topMenu.scss';

export default class TopMenu extends Component {
    constructor() {
        super();
        this.state = {
            search: false
        }
    }
    handleClick = () => {
        this.setState({ search: !this.state.search })
    }
    render() {
        return (
            <div className="topMenu">
                <a className="topMenu--telephone" href="tel:+88-23-4567"> custom care: 88-23-4567</a>

                <div className="topMenu-account">
                    <select>
                        <option value="$US">$US</option>
                        <option value="pln">PLN</option>
                    </select>
                    <a href="#">  my account</a>
                    <i onClick={this.handleClick} class="fas fa-search"></i>
                    {this.state.search ?
                        <SearchBar /> : null}


                </div>
            </div>
        )
    }
}