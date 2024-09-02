import React, { useEffect, useState } from 'react'
import './BestSeller.css';
import arrow from '../../img/fovorit/Arrow.png';
import seting from '../../img/Best/Filter.svg';
import serch from '../../img/Best/Icon.svg';
import cros from '../../img/cross/crosovki.png'
import live from '../../img/fovorit/Group.svg'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BestPost from './bestPost/BestPost';


export default function BestSeller() {

    const navigate = useNavigate();
const handleBackClick = () => {
    navigate(-1); 
  };



  // запрос для бэст сэллера
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    const fetchBestsellers = async () => {
      try {
        // Фильтруем продукты, которые являются бестселлерами
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/products?filters[isBest][$eq]=true&populate=img`, {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_TOKEN}`,
          },
        });
        setBestsellers(res.data.data); // Сохраняем данные
      } catch (err) {
        console.log(err);
      }
    };
    fetchBestsellers();
  }, []);
// закончилс
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
        
        {bestsellers.length > 0 ? (
          bestsellers.map((item) => (
            <BestPost item={item} key={item.id} />
          ))
        ) : (
          <p>No bestsellers found.</p>
        )}

       

     </div>
    </section>

    </div>
  )
}
