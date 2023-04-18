import React, { useState } from 'react'

import styles from './Card.module.scss'

export const Card = ({ title, price, imageUrl, onFavorite, onPlus }) => {

    const [isAdded, setIsAdded] = useState(false)

    const onClickPlus = () => {
        onPlus({ title, imageUrl, price });
        setIsAdded(!isAdded)
    };


    return (
        <div className={styles.card}>
            <div className={styles.favorite}>
                <img src="/images/heart-unliked.svg" alt="liked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="Sneakers " />
            <h5 className='mb-20 mt-20'>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                <img
                    className={styles.plus}
                    onClick={onClickPlus}
                    src={isAdded ? "/images/btn-cheked.svg" : "/images/btn-plus.svg"}
                    alt="Plus" />
            </div>
        </div>
    )
}
