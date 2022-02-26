import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'

export default function Sizes() {

    const sizes = useSelector(state => state.sizes)
    const dispatch = useDispatch()

    const toggleSize = (size) => {
        dispatch({
            type: "SET_SIZE_FILTER",
            size: size,
        })
    }

    return <div className='categories'>
        <h4>
            Size
        </h4>
        <div className='sizes-list'>
            {
                sizes.map((size, index) => {
                    return <div
                        key={index}
                        className={`categories-list-size ${size.active ? 'active' : ''}`}
                        onClick={() => toggleSize(size.size)}
                    >
                        {size.size}
                    </div>
                })
            }
        </div>
    </div >
}