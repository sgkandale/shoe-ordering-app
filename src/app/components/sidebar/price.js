import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'

export default function PriceRange() {

    const maxPrice = useSelector(state => state.maxPrice)
    const dispatch = useDispatch()

    const handlePriceChange = (e) => {
        dispatch({
            type: "SET_PRICE_RANGE",
            maxPrice: e.target.value,
        })
    }

    return <div className='categories'>
        <h4>
            Max Price
        </h4>
        <div className="price-slider-container">
            <input
                type="range"
                min="1" max="1500"
                defaultValue={maxPrice}
                onChange={handlePriceChange}
                className="price-slider"
            />
        </div>
        <div className='price-range'>
            <p>$1</p>
            <p>$1500</p>
        </div>
    </div >
}