import React from 'react';

const SearchBox = ({searchChange}) => {     // {searchChange} -- destructuring: allows us to grab the props obj and its properties
    return (
        
        <div className='pa2'>
            <input 
                className='tc pa3 ba b--green bg-lightest-blue'
                type='search' 
                placeholder='search robot' 
                onChange={searchChange}
            />
        </div>
    )
}
export default SearchBox;