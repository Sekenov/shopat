import React from 'react'
import { useNavigate } from 'react-router-dom';
import backButton from "./img/backButton.svg";
import './addproduct.css'
export default function AddProduct() {
    const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };
  return (
    <>
        <div className='blockAllProduct'>
        <div className="header-product">
          <div className="but1" onClick={handleBackClick}>
            <img src={backButton} alt="" />
          </div>
          <div className="but2">Add PRoduct</div>
          {/* <div className="but3"></div> */}
        </div>

        <div className="AddProduct-inputBlock">
       
          <div className="titleName">
            <p className="title-titleName">Title</p>
            <input type="text" className='title-product' placeholder='Nike AIr GOrrdan'/>
          </div>


          <div className="descriptionProduct">
            <p className="desc-descriptionProduct">Description</p>
            <input type="text" className='desc-product' placeholder='Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, magnam obcaecati! Architecto reiciendis rem maxime nostrum voluptatum, eveniet quidem labore accusantium consequuntur modi reprehenderit vel vero eligendi perspiciatis in maiores?'/>
          </div>

          <div className="qtyProduct">
            <p className="qty-qtyProduct">Qty</p>
            <input type="number" className='qty-product' placeholder='70'/>
          </div>

          <div className="colorProduct">
            <p className="color-colorProduct">Color</p>
            <input type="text" className='color-product' placeholder='Red'/>
          </div>

          <div className="categoryProduct">
            <p className="category-categoryProduct">Category</p>
            <input type="text" className='category-product' placeholder='Shoes'/>
          </div>

          <div className="priceProduct">
            <p className="price-priceProduct">Price</p>
            <input type="number" className='price-product' placeholder='2000'/>
          </div>

          <div className="photoProduct">
            <p className="photo-photoProduct">Photo</p>
            <input type="text" className='photo-product' placeholder='https://www.google.com/img.png'/>
          </div>

          <div className="checkout-button">
            <button type="submit" className="button-submit">
                Add
            </button>
        </div>

        
        </div>


        </div>  
    </>
  )
}
