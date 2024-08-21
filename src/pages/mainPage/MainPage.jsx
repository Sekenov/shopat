
import React from 'react';
import './MainPage.css';
import frameImage from '../../img/cross/crosovki.png'; 

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

      <section className='Popular'>
        <div className='PopularText'>
          <h1>Popular Shoes</h1>
          <p>See all</p>
        </div>

        <div className='wrapcart'>
          <div className="Popular_card">
            <div className="Popular_image">
              <img src={frameImage} alt="Product" />
            </div>
            <div className="Popular_text">
              <span>BEST SELLER</span>
              <h2>Nike Jordan</h2>
            </div>
            <div className="buy">
              <p>$493.00</p>
              <button className="add-to-cart">+</button>
            </div>
          </div>



          <div className="Popular_card">
            <div className="Popular_image">
              <img src={frameImage} alt="Product" />
            </div>
            <div className="Popular_text">
              <span>BEST SELLER</span>
              <h2>Nike Jordan</h2>
            </div>
            <div className="buy">
              <p>$493.00</p>
              <button className="add-to-cart">+</button>
            </div>
          </div>
        </div>
      </section>

      <section className='New'>
        <div className='NewText'>
          <h1>New Arrivals</h1>
          <p>See all</p>
        </div>

        <div className="New_card">
            <div className="Best_text">
              <span>Best Choice</span>
              <h2>Nike Air Jordan</h2>
              <p>$849.69</p>
            </div>

            <div className="New_image">
              <img src={frameImage} alt="Product" />
            </div>
        </div>

      </section>

      <section className='New'>
        <div className='NewText'>
          <h1>New Arrivals</h1>
          <p>See all</p>
        </div>

        <div className="New_card">
            <div className="Best_text">
              <span>Best Choice</span>
              <h2>Nike Air Jordan</h2>
              <p>$849.69</p>
            </div>

            <div className="New_image">
              <img src={frameImage} alt="Product" />
            </div>
        </div>

      </section>


    </div>
  );
}

export default MainPage;
