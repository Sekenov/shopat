import React from 'react'
import './Favorit.css';
import arrow from '../../img/fovorit/Arrow.png';
import like from '../../img/fovorit/Icon.svg';
import cros from '../../img/cross/crosovki.png'
import live from '../../img/fovorit/Group.svg'
import { useNavigate } from 'react-router-dom';


export default function Favorit() {
    const navigate = useNavigate();

    // кнопка назад
  const handleBackClick = () => {
    navigate(-1); 
  };
  return (
    <div className='Favorit_wrap'>

    <header>
        <div className='wrapperfav'>
            <div className='favbut'  onClick={handleBackClick}>
                <img className='fav_circle' src={arrow}  alt="" />
            </div>

            <div className="favor_text">
                <h1>Favourite</h1>
            </div>


            <div className='favcor'>
                <img className='fav_like' src={like} alt="" />
            </div>
        </div>
    </header>

    <section className='favorit'>

    <div className='favcart'>
        <div className="fav_card">
            <div className="heart-icon">
                <img className="fa fa-heart-o" src={live} alt="" />
            </div>

            <div className="fav_image">
                <img src={cros} alt="Product" />
            </div>
            <div className="fav_text">
                <span>BEST SELLER</span>
                <h2>Nike Jordan</h2>
            </div>
            <div className="fav_buy">
                <p>$493.00</p>
                <div className="cicr">
                    <div> </div>
                    <div> </div>
                </div>
            </div>
        </div>

        <div className="fav_card">
            <div className="heart-icon">
                <img className="fa fa-heart-o" src={live} alt="" />
            </div>
            <div className="fav_image">
                <img src={cros} alt="Product" />
            </div>
            <div className="fav_text">
                <span>BEST SELLER</span>
                <h2>Nike Jordan</h2>
            </div>
            <div className="fav_buy">
                <p>$493.00</p>
                <div className="cicr">
                    <div> </div>
                    <div> </div>
                </div>
            </div>
        </div>

        <div className="fav_card">
            <div className="heart-icon">
                <img className="fa fa-heart-o" src={live} alt="" />
            </div>
            <div className="fav_image">
                <img src={cros} alt="Product" />
            </div>
            <div className="fav_text">
                <span>BEST SELLER</span>
                <h2>Nike Jordan</h2>
            </div>
            <div className="fav_buy">
                <p>$493.00</p>
                <div className="cicr">
                    <div> </div>
                    <div> </div>
                </div>
            </div>
        </div>

        <div className="fav_card">
            <div className="heart-icon">
                <img className="fa fa-heart-o" src={live} alt="" />
            </div>
            <div className="fav_image">
                <img src={cros} alt="Product" />
            </div>
            <div className="fav_text">
                <span>BEST SELLER</span>
                <h2>Nike Jordan</h2>
            </div>
            <div className="fav_buy">
                <p>$493.00</p>
                <div className="cicr">
                    <div> </div>
                    <div> </div>
                </div>
            </div>
        </div>

    </div>
</section>

    </div>
  )
}
