import React from 'react';
import SearchBar from './SerachBar.jsx';
import { Link } from 'react-router-dom'

const Menu = (props) => {
    return (
        <div className="topMenu-account">
            <select>
                <option value="$US">$US</option>
                <option value="pln">PLN</option>
            </select>
            <Link to="/cart"> my account</Link>

            <i onClick={props.handleClick} class="fas fa-search"></i>
            {props.search ? <SearchBar /> : null}
        </div>
    )
}
export default Menu;