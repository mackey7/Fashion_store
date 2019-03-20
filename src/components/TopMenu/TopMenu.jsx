import React, { Component } from 'react';
import SearchBar from './SerachBar.jsx';
import { connect } from 'react-redux'
import { changeCurrency } from "../../actions/actions";
import { Link } from 'react-router-dom'

import './topMenu.scss';

class TopMenu extends Component {
    constructor() {
        super();
        this.state = {
            search: false,
            openMenu: false
        }
    }


    diplaySearch = () => {
        this.setState(state => ({ search: !state.search }))
    }
    diplayMenu = () => {
        this.setState(state => ({ openMenu: !state.openMenu }))
    }
    changeCurrency = (e) => {
        this.props.changeCurrency(e.target.value)
    }

    render() {
        const width = window.innerWidth > 900;
        const { openMenu } = this.state;


        const nav = { display: openMenu ? " flex " : 'none' }



        const search = this.state.search ? <SearchBar /> : null
        const menuIcon = this.state.openMenu ? <i className="fas fa-times"></i> : <i className="fas fa-bars"></i>

        return (
            <div className="topMenu" >
                <div className="topMenu-row">
                    <a className="topMenu--telephone" href="tel:+88-23-4567"> custom care: 88-23-4567</a>
                    <div onClick={this.diplayMenu} className="menu-bar">
                        {menuIcon}
                    </div>
                </div>
                {width ? (<div className="topMenu--nav" >
                    <select className="topMenu--nav__select" onChange={(e) => this.changeCurrency(e)}>
                        <option value="PLN">PLN</option>
                        <option value="USD">USD</option>
                    </select>
                     <Link  className="topMenu--nav__account" to="/cart"> my account</Link>
                   
                    <i onClick={this.diplaySearch} className=" searchIcon fas fa-search"></i>
                    {search}
                </div>)
                    :
                    (<div style={nav} className="topMenu--nav" >
                        <select className="topMenu--nav__select" onChange={(e) => this.changeCurrency(e)}>
                            <option value="PLN">PLN</option>
                            <option value="USD">USD</option>
                        </select>
                          <Link  className="topMenu--nav__account" to="/cart"> my account</Link>
                        <i onClick={this.diplaySearch} className=" searchIcon fas fa-search"></i>
                        {search}
                    </div>)}



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
