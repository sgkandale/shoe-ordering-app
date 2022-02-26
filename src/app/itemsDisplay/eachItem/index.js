import React, { useState } from 'react'
import './style.css'

export default function EachItem(props) {

    const { item } = props
    const [displayImage, setDisplayImage] = useState({
        imgLink: item.images[0],
        imgIndex: 0,
    })

    const handleChangeImage = (imgLink, index) => {
        setDisplayImage({
            imgLink: imgLink,
            imgIndex: index,
        })
    }

    return <div className="each-item">
        <div
            className='item-header'
            style={{
                borderLeft: `4px solid ${item.colorScheme}`,
                marginLeft: '-15px',
                paddingLeft: 30
            }}
        >
            <h3 className='item-model'>
                {item.model}
            </h3>
            <h2 className='item-brand'>
                {item.brand}
            </h2>
        </div>
        <div className='item-display-image'>
            <img src={displayImage.imgLink} alt={item.model} />
        </div>
        <div className='item-footer'>
            <div className='item-price'>
                <h3>
                    $ {item.price}
                </h3>
            </div>
            <div className='item-images'>
                {
                    item.images.filter((image, index) => displayImage.imgIndex !== index).map((image, index) => {
                        return <img
                            key={index}
                            src={image}
                            alt={item.model}
                            onClick={() => handleChangeImage(image, index)}
                        />
                    })
                }
            </div>
        </div>
    </div>
}