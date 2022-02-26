import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Categories() {

    const filters = useSelector(state => state.filters)
    const dispatch = useDispatch()

    const categoriesList = [
        {
            title: 'Flip Flops',
            name: 'flipFlops',
        },
        {
            title: 'Sneakers',
            name: 'sneakers',
        },
        {
            title: 'Lace Up Shoes',
            name: 'laceUpShoes',
        },
        {
            title: 'Shoe Accessories',
            name: 'shoeAccessories',
        },
    ]

    const toggleCategory = (category) => {
        dispatch({
            type: 'TOGGLE_FILTER',
            filter: category,
        })
    }


    return <div className='categories'>
        <h4>
            Categories
        </h4>
        <div className='categories-list'>
            {
                categoriesList.map((category, index) => {
                    return <label className="category-container" key={category.name}>
                        <input
                            type="checkbox"
                            className='category-checkbox'
                            checked={filters[category.name]}
                            name={category.title}
                            onChange={() => toggleCategory(category.name)}
                        />
                        {category.title}
                        <span className="category-checkmark"></span>
                        <br />
                    </label>
                })
            }
        </div>
    </div >
}