import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'

const shoesAllSizes = ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49"]

export default function Sizes() {

    const filterSizes = useSelector(state => state.filterSizes)
    const dispatch = useDispatch()

    const toggleSize = (size) => {
        if (filterSizes.includes(size)) {
            dispatch({ type: 'REMOVE_SIZE_FILTER', size: size })
        } else {
            dispatch({ type: 'ADD_SIZE_FILTER', size: size })
        }
    }

    return <div className='categories'>
        <h4>
            Size
        </h4>
        <div className='sizes-list'>
            {
                shoesAllSizes.map((size) => {
                    return <div
                        key={size}
                        className={`categories-list-size ${filterSizes.find(item => item === size) ? 'active' : ''}`}
                        onClick={() => toggleSize(size)}
                    >
                        {size}
                    </div>
                })
            }
        </div>
    </div >
}