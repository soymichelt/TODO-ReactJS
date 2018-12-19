import React from 'react'
import './task-form.css'

const Search = ({ searchValue, onSearchChange }) => (
    <div
        className={'task-form'}
        style={
            {
                padding: '16px',
            }
        }
    >
        <input
            className={'form-controls'}
            onChange={onSearchChange}
            type={'text'}
            placeholder={'Search...'}
            value={searchValue}
            />
    </div>
);

export default Search;