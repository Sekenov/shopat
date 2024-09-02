import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const DEFAULT_IMAGE_URL = "/default-image.png";

export default function Card({ item }) {
  const imageUrl = item.attributes.img || DEFAULT_IMAGE_URL;

  return (
    <div className="wrapcart">
      <div className="Popular_card">
        <Link className="link" to={`/details/${item.id}`}>
          <div className="Popular_image">
            <img src={imageUrl} alt="Product" />
          </div>
          <div className="Popular_text">
            {item.attributes.isNew && <div className="new">NEW</div>}
            <h2>{item.attributes.title}</h2>
          </div>
        </Link>
        <div className="buy">
          <p>${item.attributes.price.toFixed(2)}</p>
          <button className="add-to-cart">+</button>
        </div>
      </div>
    </div>
  );
}
