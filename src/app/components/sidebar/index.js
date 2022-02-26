import React from 'react'
import Categories from './categories'
import PriceRange from './price'
import Sizes from './sizes'
import './style.css'

export default function Sidebar() {

    return <div className='sidebar'>
        <Categories />
        <PriceRange />
        <Sizes />
    </div>
}