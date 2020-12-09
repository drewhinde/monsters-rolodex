import React from 'react';
import '../search-box/search-box.styles.css';

const SearchBox = props => {
    return (
        <input 
            type={props.type} 
            placeholder={props.placeholder} 
            onChange={props.handleChange} 
            className='search' 
        />
    )
}

export default SearchBox