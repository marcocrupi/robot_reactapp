import React from 'react';

function SearchBox({ searchfield, searchChange }) {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            // onChange è un evento che si attiva ogni volta che l'input cambia
            />
        </div>
    )
}

export default SearchBox;