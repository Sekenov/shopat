import React from "react";
import "./purchase.css";
import backButton from "./img/backButton.svg";
import email from "./img/email.svg";
import changeButton from "./img/changeButton.svg";
import phone from "./img/phone.svg";
import choose from "./img/choose.svg";
import karta from "./img/map.svg";
import paypal from "./img/paypal.svg";
import { useNavigate } from "react-router-dom";
export default function Purchase() {

  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); 
  };
  return (
    <>
      <div className="mainBlockPurchase">
        <div className="header-purchase">
          <div className="but1" onClick={handleBackClick}>
            <img src={backButton} alt="" />
          </div>
          <div className="but2">My Cart</div>
          <div className="but3"></div>
        </div>

        <div className="contact-information">
          <p className="info-p">Contact information</p>

          <div className="info-own">
            <div className="info-email">
              <div className="gap-email">
                <div className="block-img">
                  <img src={email} alt="" />
                </div>

                <div className="block-email">
                  <p className="email-address">rumenhussen@gmail.com</p>
                  <p className="text-adddress">Email</p>
                </div>
              </div>

              <div className="change-info">
                <img src={changeButton} alt="" />
              </div>
            </div>

            <div className="info-phone">
              <div className="gap-phone">
                <div className="block-img">
                  <img src={phone} alt="" />
                </div>

                <div className="block-phone">
                  <p className="phone-address">+7859555685</p>
                  <p className="text-adddress">Phone</p>
                </div>
              </div>

              <div className="change-info">
                <img src={changeButton} alt="" />
              </div>
            </div>
          </div>

          <div className="address-map">
            <div className="gap">
              <p className="address">Address</p>

              <div className="input-map">
                <input
                  className="map-map"
                  type="text"
                  placeholder="Choose your address"
                />
                <img src={choose} alt="" />
              </div>
            </div>

            <div className="karta">
              <img src={karta} alt="" />
            </div>
          </div>

          <div className="paymant">
            <p className="paymant-name">Payment Method</p>

            <div className="paymant-choose">
              <div className="gap">
                <div className="block-pay">
                  <img src={paypal} alt="" />
                </div>

                <div className="pay-pay">
                  <p className="name-pay">PayPal</p>
                  <p className="num-pay">785489</p>
                </div>
              </div>

              <div className="chooseBlock">
                <img src={choose} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="check-order-purchase">
        <div className="padding-order">
          <div className="price-order">
            <p className="name-price">Subtotal</p>
            <p className="price-price">$458</p>
          </div>
          <div className="sale-order">
            <p className="sale-name">Shopping</p>
            <p className="sale-price">$265</p>
          </div>
        </div>
        <div className="line-line">
          <div className="line"></div>
        </div>
        <div className="padding-order">
          <div className="total-cost">
            <p className="cost-name">Total cost</p>
            <p className="cost-price">$856</p>
          </div>
        </div>

        <div className="checkout-button">
          <button className="button-submit">Checkout</button>
        </div>
      </div>
    </>
  );
}
