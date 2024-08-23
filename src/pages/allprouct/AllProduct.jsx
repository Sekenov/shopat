import React from 'react'
import './AllProduct.css';
import frameImage from '../../img/cross/crosovki.png';

import arrow from '../../img/fovorit/Arrow.png';
import serch from '../../img/Best/Icon.svg';


export default function AllProduct() {
  return (
    <div className='allProduct'>

    <header>
        <div className='wrapperbest'>
            <div className='bestbut'>
                <img className='best_circle' src={arrow}  alt="" />
            </div>

            <div className="best_text">
                <h1>AllProduct</h1>
            </div>

            <div className="serch">
                <img className='best_set' src={serch} alt="" />
            </div>
                
        </div>
    </header>

    

      <section className='Popular'>

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
    </div>
  )
}
