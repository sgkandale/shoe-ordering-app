import React from 'react'

export default function ItemsHeader(props) {

    return <div className='items-display-header'>
        <h2>
            New Arrivals
        </h2>
        <div className='items-display-sort'>
            <select
                name="sort_method"
                value={props.itemsOrder}
                onChange={(e) => props.setItemsOrder(e.target.value)}
                className='items-display-sort-select'
            >
                <option value="" disabled={true}>Sort by Price</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
            </select>
        </div>
    </div>
}