
import React from 'react';
import './MainPage.css';

function MainPage() {
  return (
    <div className="main-page">
      <header>
        <div className='wrapper'>
            <div className='headbut'>
              <span className='circle'></span>
            </div>

            <form className="form">
              <button></button>
              <input className="input" placeholder="Looking for shoes" required="" type="text"></input>
            </form>


            <div className='headcor'>
              <span className='corzin'></span>
            </div>
        </div>
      </header>

      <main>
        <div className="brands-container">
          <div className="brand nike"></div>
          <div className="brand puma"></div>
          <div className="brand under-armour"></div>
          <div className="brand adidas"></div>
          <div className="brand converse"></div>
        </div>
      </main>

    </div>
  );
}

export default MainPage;
