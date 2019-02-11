import React, { Component } from 'react';
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
        let styles = {
            display: this.state.search ? "block" : "none"

        };
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
                    <div style={styles} className="search-container">
                        <div className='search-bar'>
                            <input style={styles} type="text" placeholder="search..." />
                            <input style={styles} type="button" value="Search" />


                        </div>

                    </div>

                </div>
            </div>
        )
    }
}