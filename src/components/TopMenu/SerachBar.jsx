import React, { Component } from 'react';

const SearchBar = () => {
    return (
        <div className="search-container" >
            <div className='search-bar'>
                <input type="text" placeholder="search..." />
                <button> <i class="serach_btn fas fa-search"></i></button>


            </div>

        </div >


    )

}
export default SearchBar;