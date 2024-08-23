import React from 'react'
import './BestSeller.css';
import arrow from '../../img/fovorit/Arrow.png';
import seting from '../../img/Best/Filter.svg';
import serch from '../../img/Best/Icon.svg';
import cros from '../../img/cross/crosovki.png'
import live from '../../img/fovorit/Group.svg'
import { useNavigate } from 'react-router-dom';


export default function BestSeller() {

    const navigate = useNavigate();
const handleBackClick = () => {
    navigate(-1); 
  };
  return (
    <div className='Best_wrap'>

    <header>
        <div className='wrapperbest'>
            <div className='bestbut' onClick={handleBackClick}>
                <img className='best_circle' src={arrow}  alt="" />
            </div>

            <div className="best_text">
                <h1>Best Sellers</h1>
            </div>


            <div className='bestcor'>
                <div className="seting">
                    <img className='best_set' src={seting} alt="" />
                </div>

                <div className="serch">
                    <img className='best_set' src={serch} alt="" />
                </div>
                
            </div>
        </div>
    </header>

    <section className='best'>

    <div className='bestcart'>
        <div className="best_card">
            <div className="best_image">
                <img src={cros} alt="Product" />
            </div>
            <div className="best_text">
                <span>BEST SELLER</span>
                <h2>Nike Jordan</h2>
            </div>
            <div className="best_buy">
                <p>$493.00</p>
                <div className="crug">
                    <div> </div>
                    <div> </div>
                </div>
            </div>
        </div>

        <div className="best_card">
            <div className="best_image">
                <img src={cros} alt="Product" />
            </div>
            <div className="best_text">
                <span>BEST SELLER</span>
                <h2>Nike Jordan</h2>
            </div>
            <div className="best_buy">
                <p>$493.00</p>
                <div className="crug">
                    <div> </div>
                    <div> </div>
                </div>
            </div>
        </div>

        <div className="best_card">
            <div className="best_image">
                <img src={cros} alt="Product" />
            </div>
            <div className="best_text">
                <span>BEST SELLER</span>
                <h2>Nike Jordan</h2>
            </div>
            <div className="best_buy">
                <p>$493.00</p>
                <div className="crug">
                    <div> </div>
                    <div> </div>
                </div>
            </div>
        </div>

        <div className="best_card">
            <div className="best_image">
                <img src={cros} alt="Product" />
            </div>
            <div className="best_text">
                <span>BEST SELLER</span>
                <h2>Nike Jordan</h2>
            </div>
            <div className="best_buy">
                <p>$493.00</p>
                <div className="crug">
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
