import React, { useEffect, useState } from 'react'

import { Header } from './components/Header';
import { Card } from './components/Card';
import { Drawer } from './components/Drawer';


function App() {
  const [items, setItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [cartOpened, setCartOpened] = useState(false)
  const [searchValue, setSearchValue] = useState([])

  useEffect(() => {
    fetch('https://643d3297f0ec48ce9055622d.mockapi.io/items').then(res => {
      return res.json();
    }).then(json => {
      setItems(json);
    })
  }, [])

  const onAddToCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  }

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value)
  }



  return (
    <div className="wrapper clear">

      {cartOpened ? <Drawer items={cartItems} onClose={() => setCartOpened(false)} /> : null}

      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className='d-flex align-center justify-between mb-40'>
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className='search-block d-flex '>
            <img src="/images/search.svg" alt="Search" />
            {searchValue && <img
              onClick={() => setSearchValue('')}
              className='clear cu-p'
              src="/images/btn-remove.svg"
              alt="Clear" />}
            <input onChange={onChangeSearchInput} value={searchValue} className='opacity-7' placeholder="Поиск..." />
          </div>
        </div>
        <div className='d-flex flex-wrap'>
          {
            items
              .filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
              .map((item, index) => (
                <Card
                  key={index}
                  title={item.title}
                  price={item.price}
                  imageUrl={item.imageUrl}
                  onFavorite={() => console.log('Добавили закладки')}
                  onPlus={(obj) => onAddToCart(obj)} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
