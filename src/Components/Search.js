import React from 'react'
import ReactStars from 'react-rating-stars-component'
import { InputGroup, FormControl } from 'react-bootstrap';
import AddMovie from './AddMovie';
import { Link } from 'react-router-dom';

const Search = ({ handleAdd, searchText, searchStars, handleSearchStars, handleSearchText }) => {
    const ratingChanged = (newRating) => {
        console.log(newRating);
    };
    return (
        <div className='navigation'>
            <AddMovie handleAdd={handleAdd} />
            <Link to='/'>
                <img src='logo.png' alt='???' style={{ maxHeight: 60 }} />
            </Link>
            <InputGroup id="search-bar">
                <FormControl
                    placeholder="Search"
                    type='text'
                    value={searchText}
                    onChange={handleSearchText}
                />
            </InputGroup>
            <ReactStars
                searchStars={searchStars}
                onChange={ratingChanged, handleSearchStars}
                count={5}
                size={24}
                value={1}
                activeColor="#ffd700"
            />
        </div>
    )
}

export default Search
