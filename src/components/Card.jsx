import React from 'react'

export const Card = ({ title, price, imageUrl }) => {
    return (
        <div className='card'>
            <div className='favorite'>
                <img src="/images/heart-unliked.svg" alt="liked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers " />
            <h5 className='mb-30'>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <button className='button'>
                    <img width={11} height={11} src="/images/plus.svg" alt="Plus" />
                </button>
            </div>
        </div>
    )
}
