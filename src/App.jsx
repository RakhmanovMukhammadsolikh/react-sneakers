import React from 'react'

import { Header } from './components/Header';
import { Card } from './components/Card';
// import { Drawer } from './components/Drawer';

const arr = [
  {
    id: 1,
    title: "Мужские Кроссовки Nike Blazer Mid Suede",
    price: 12999,
    imageUrl: '/images/sneakers/1.jpg'
  },
  {
    id: 2,
    title: "Мужские Кроссовки Nike Kyrie 7",
    price: 10799,
    imageUrl: '/images/sneakers/2.jpg'
  },
  {
    id: 3,
    title: "Мужские Кроссовки Nike LeBron XVIII",
    price: 6499,
    imageUrl: '/images/sneakers/3.jpg'
  },
]

function App() {
  return (
    <div className="wrapper clear" >

      {/* <Drawer /> */}

      < Header />
      <div className="content p-40">
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex '>
            <img src="/images/search.svg" alt="Search" />
            <input className='opacity-7' placeholder="Поиск..." />
          </div>
        </div>
        <div className='d-flex'>
          {
            arr.map((obj) => (
              <Card key={obj.id} title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
