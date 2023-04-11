import React from 'react'

import { Header } from './components/Header';
import { Card } from './components/Card';
// import { Drawer } from './components/Drawer';

function App() {
  return (
    <div className="wrapper clear">

      {/* <Drawer /> */}

      <Header />
      <div className="content p-40">
        <div className='d-flex align-center justify-between mb-40'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex '>
            <img src="/images/search.svg" alt="Search" />
            <input className='opacity-7' placeholder="Поиск..." />
          </div>
        </div>
        <div className='d-flex'>
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
