import React from 'react';
import SearchBar from './SerachBar.jsx';

const Menu = (props) => {
    return (
        <div className="topMenu-account">
            <select>
                <option value="$US">$US</option>
                <option value="pln">PLN</option>
            </select>
            <a href="#">  my account</a>
            <i onClick={props.handleClick} class="fas fa-search"></i>
            {props.search ? <SearchBar /> : null}
        </div>
    )
}
export default Menu;