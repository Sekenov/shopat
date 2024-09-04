import React from "react";
import "./card.css";
import { Link } from "react-router-dom";

const DEFAULT_IMAGE_URL = "/default-image.png";

export default function Card({ item }) {
  // Получаем URL изображения из данных
  const imgData = item.attributes.img?.data?.[0]?.attributes;
  const imageUrl = imgData
    ? `${process.env.REACT_APP_UPLOAD_URL}${imgData.url}`
    : DEFAULT_IMAGE_URL;

  return (
    <div className="Popular_card">
      <Link className="link" to={`/details/${item.id}`}>
        {" "}
        <div className="Popular_image">
          {" "}
          <img
            src={imageUrl}
            alt={item.attributes.title || "Product"}
            className="Popular_img"
          />{" "}
        </div>{" "}
        <div className="Popular_text">
          {" "}
          {item.attributes.isNew && <div className="new">BEst</div>}{" "}
          <h2 className="Popular_title">{item.attributes.title}</h2>{" "}
        </div>{" "}
      </Link>{" "}
      <div className="buy">
        {" "}
        <p className="Popular_price">
          ${item.attributes.price.toFixed(2)}
        </p>{" "}
        <button className="add-to-cart">+</button>{" "}
      </div>{" "}
    </div>
  );
}
