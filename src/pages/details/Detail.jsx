import React from 'react'
import "./detail.css"
import backButton from "./img/backButton.svg"
import cart from './img/Cart.svg'
import nike from './img/nike.png'
import nike1 from './img/nikeGallery.png'
import nike2 from './img/nikeGallery2.png'
import nike3 from './img/nikeGallery3.png'
export default function Detail() {
  return (
    <>
    <div className='mainBlock'>
        <div className='header-details'>
            <div className='but1'><img src={backButton} alt="" /></div>
            <div className='but2'>Men's Shoes</div>
            <div className='but3'><img src={cart} alt="" /></div>
        </div>

        <div className='photo-details'>
            <img src={nike} alt="" />
        </div>


        <div className='detail-details'>
            <div className='text-details'>
                <div className='title-details'>
                    <h3 className='bestSeller'>BEST SELLER</h3>
                    <h2 className='title'>NIKE AIR MAX 270</h2>
                </div>
                <p className='price'>$ 200</p>
                <p className='about'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            </div>
            <div className='gallery-details'>
                <h2 className='gallery-text'>Gallery</h2>
                <div className='gallery-type'>
                    <div className='gallery-box'><img src={nike1} alt="" /></div>
                    <div className='gallery-box'><img src={nike2} alt="" /></div>
                    <div className='gallery-box'><img src={nike3} alt="" /></div>
                </div>
            </div>

            <div className='size-details'>
                <h2 className='size-text'>Size</h2>
                <div className='size-type'>
                    <div className='size-box'>39</div>
                    <div className='size-box'>40</div>
                    <div className='size-box'>41</div>
                    <div className='size-box'>42</div>
                    <div className='size-box'>43</div>
                </div>
            </div>

            <div className="accept-details">
                <div className="price-details">
                    <p className="price-text">Price</p>
                    <p className='price-amount'>$ 25000</p>
                </div>
                <button className="accept-button">Add To Cart</button>
            </div>
        </div>
    </div>
    </>
  )
}
