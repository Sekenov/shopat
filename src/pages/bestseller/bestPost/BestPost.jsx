import React from 'react'
import './bestPost.css'
const DEFAULT_IMAGE_URL = "/default-image.png";
export default function BestPost({ item }) {
    const imgData = item.attributes.img?.data?.[0]?.attributes;
    const imageUrl = imgData ? `${process.env.REACT_APP_UPLOAD_URL}${imgData.url}` : DEFAULT_IMAGE_URL;
  
  return (
    <>
    <div className="best_card">
            <div className="best_image">
                <img className="best_img" src={imageUrl} alt={item.attributes.title || "Product"} />
            </div>
            <div className="best_text">
            {item.attributes.isNew && <div className="best">Best</div>}
                <h2 className='best_title'>{item.attributes.title}</h2>
            </div>
            <div className="best_buy">
                <p className='best_price'>${item.attributes.price.toFixed(2)}</p>
                <div className="crug">
                    <div> </div>
                    <div> </div>
                </div>
            </div>
        </div></>
  )
}
