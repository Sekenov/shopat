import React from "react";
import "./AllProduct.css";
import arrow from "../../img/fovorit/Arrow.png";
import serch from "../../img/Best/Icon.svg";
import { useNavigate } from "react-router-dom";
import SeeAllProduct from "./seeAllProduct/SeeAllProduct";

export default function AllProduct() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <div className="allProduct">
      <header>
        <div className="wrapperbest">
          <div className="bestbut" onClick={handleBackClick}>
            <img className="best_circle" src={arrow} alt="" />
          </div>

          <div className="best_text">
            <h1>AllProduct</h1>
          </div>

          <div className="serch">
            <img className="best_set" src={serch} alt="" />
          </div>
        </div>
      </header>

      <SeeAllProduct />
    </div>
  );
}
