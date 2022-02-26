import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import EachItem from './eachItem'
import ItemsHeader from './itemsHeader'
import './style.css'

export default function ItemsDisplay() {

    const [itemsList, setItemsList] = useState([])
    const shoes = useSelector(state => state.shoes)
    const filters = useSelector(state => state.filters)
    const maxPrice = useSelector(state => state.maxPrice)
    const [itemsOrder, setItemsOrder] = useState('')

    useEffect(() => {
        var shoesToState = []

        if (filters.flipFlops) {
            shoesToState = shoesToState.concat(shoes.filter(item => item.category === 'Flip Flops'))
        }
        if (filters.sneakers) {
            shoesToState = shoesToState.concat(shoes.filter(item => item.category === 'Sneakers'))
        }
        if (filters.laceUpShoes) {
            shoesToState = shoesToState.concat(shoes.filter(item => item.category === 'Lace Up Shoes'))
        }
        if (filters.shoeAccessories) {
            shoesToState = shoesToState.concat(shoes.filter(item => item.category === 'Shoe Accessories'))
        }

        if (itemsOrder === 'desc') {
            shoesToState.sort((a, b) => b.price - a.price)
        } else if (itemsOrder === 'asc') {
            shoesToState.sort((a, b) => a.price - b.price)
        }

        setItemsList(shoesToState.filter(item => item.price <= maxPrice))

        setItemsList(shoesToState)
    }, [filters, itemsOrder, maxPrice])

    const renderItem = () => {
        if (itemsList.length === 0) {
            return <div className='no-items'>
                <p className='no-matching-items'>
                    No matching items
                </p>
            </div>
        }
        return itemsList.map((item) => {
            return <EachItem key={item.id} item={item} />
        })
    }

    return <div className="items-display">
        <ItemsHeader
            itemsOrder={itemsOrder}
            setItemsOrder={setItemsOrder}
        />
        <div className='items-display-items'>
            {renderItem()}
        </div>
    </div>
}