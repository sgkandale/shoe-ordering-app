import React from 'react'
import './style.css'

export default function Header() {

    return <div className='header'>
        <div className='header-logo'>
            <h3>
                Shoe.
            </h3>
        </div>
        <div className='header-search'>
            <div className='header-search-container'>
                <input type='text' placeholder='Search' />
            </div>
        </div>
    </div>
}