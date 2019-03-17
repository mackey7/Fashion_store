import React, { Component } from 'react';
import SearchBar from './SerachBar.jsx';
import { connect } from 'react-redux'
import { changeCurrency } from "../../actions/actions";

import './topMenu.scss';

class TopMenu extends Component {
    constructor() {
        super();
        this.state = {
            search: false,
            menuBar: true,
        }
    }

    handleClick = () => {
        console.log("cli")
        this.setState(state => ({ search: !state.search }))
    }
    diplayMenu = () => {
        this.setState(state => ({ menuBar: !state.menuBar }))
    }
    handleChange = (e) => {
        this.props.changeCurrency(e.target.value)
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
                    <select onChange={(e) => this.handleChange(e)}>
                        <option value="PLN">PLN</option>
                        <option value="USD">USD</option>

                    </select>
                    <a href="#">  my account</a>
                    <i onClick={this.handleClick} className="fas fa-search"></i>
                    {this.state.search ? <SearchBar /> : null}
                </div>

            </div >
        )
    }
}

const mapDispatchToProps = dispatch => {

    return {

        changeCurrency: e => dispatch(changeCurrency(e))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(TopMenu);
