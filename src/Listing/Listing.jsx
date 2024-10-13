import React from 'react'
import ListItem from "./ListItem.jsx";

function Listing(props) {
    const { items } = props

    return (
        <ul className='item-list'>
            {items.map((item) => <ListItem key={item.listing_id} item={item} />)}
        </ul>
    )
}

export default Listing