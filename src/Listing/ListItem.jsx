import React from 'react'

function ListItem({item}) {
    const { url, MainImage, title, currency_code, price, quantity, state } = item;

    if (state !== 'active') {
        return null;
    }

    let pricetag;
    let colorclass;

    if (currency_code === 'USD') {
        pricetag = `$${price}`
    } else if (currency_code === 'EUR') {
        pricetag = `€${price}`
    } else {
        pricetag = `${price} ${currency_code}`
    }

    if (quantity <= 10) {
        colorclass = 'level-low'
    } else if (quantity <= 20) {
        colorclass = 'level-medium'
    } else {
        colorclass = 'level-high'
    }

    const name = title.length > 50 ? `${title.slice(0, 50)}...` : title;


    return (
        <div className='item'>
            <div className='item-image'>
                <a href={url}>
                    <img src={MainImage.url_570xN} alt={title}></img>
                </a>
            </div>
            <div className='item-details'>
                <p className='item-title'>{name}</p>
                <p className='item-price'>{pricetag}</p>
                <p className={`item-quantity ${colorclass}`}>{quantity} left</p>
            </div>
        </div>
    )
}

export default ListItem
