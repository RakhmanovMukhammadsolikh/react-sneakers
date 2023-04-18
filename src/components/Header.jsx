import React from 'react'

export const Header = ({ onClickCart }) => {
    return (
        <div>
            <header className="d-flex justify-between align-center p-40">
                <div className="d-flex align-center ">
                    <img src="/images/logo.png" width={40} height={40} alt="Logo" />
                    <div className="headerInfo">
                        <h3 className='text-uppercase'>REACT SNEAKERS</h3>
                        <p className='opacity-5'>Магазин лучших кроссовок</p>
                    </div>
                </div>
                <ul className="d-flex cu-p">
                    <li onClick={onClickCart} className='mr-30'>
                        <img src="/images/cart.svg" width={18} height={18} alt="Cart" />
                        <span>1205 руб.</span>
                    </li>
                    <li>
                        <img src="/images/user.svg" alt="User" />
                    </li>
                </ul>
            </header>
        </div>
    )
}
