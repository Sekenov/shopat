import React from "react";
import backButton from "./img/backButton.svg";
import "./cart.css";
import trash from "./img/delete.png";
import minus from "./img/minus.png";
import plus from "./img/plus.png";
import nikeCart from "./img/nike-cart.png";
import { useNavigate } from "react-router-dom";
export default function Cart() {
  const navigate = useNavigate();
  // при нажатия на страницу покупки, кнопка заплатить
  const handleCheckout = () => {
    navigate('/purchase');
  };



  // кнопка назад
  const handleBackClick = () => {
    navigate(-1); 
  };
  return (
    <><div className="header-cart">
          <div className="but1" onClick={handleBackClick}>
            <img src={backButton} alt="" />
          </div>
          <div className="but2">My Cart</div>
          <div className="but3"></div>
        </div>
      <div className="mainBlockCart">
        

        <div className="cart">
          <div className="cart-order">
            <div className="cart-gap">
              <div className="img-order">
                <img src={nikeCart} alt="" />
              </div>

              <div className="about-order">
                <div className="gap-order">
                  <p className="name-about">Nike CLub max</p>
                  <p className="price-about">$ 550</p>
                </div>
                <div className="amount-order">
                  <div className="minus-amount">-</div>
                  <p className="amount-amount">1</p>
                  <div className="plus-amount">+</div>
                </div>
              </div>
            </div>

            <div className="action-order">
              <p className="size-action">L</p>
              <div className="delete-action">
                <img src={trash} alt="" />
              </div>
            </div>
          </div>
          <div className="cart-order">
            <div className="cart-gap">
              <div className="img-order">
                <img src={nikeCart} alt="" />
              </div>

              <div className="about-order">
                <div className="gap-order">
                  <p className="name-about">Nike CLub max</p>
                  <p className="price-about">$ 550</p>
                </div>
                <div className="amount-order">
                  <div className="minus-amount">-</div>
                  <p className="amount-amount">1</p>
                  <div className="plus-amount">+</div>
                </div>
              </div>
            </div>

            <div className="action-order">
              <p className="size-action">L</p>
              <div className="delete-action">
                <img src={trash} alt="" />
              </div>
            </div>
          </div>
          <div className="cart-order">
            <div className="cart-gap">
              <div className="img-order">
                <img src={nikeCart} alt="" />
              </div>

              <div className="about-order">
                <div className="gap-order">
                  <p className="name-about">Nike CLub max</p>
                  <p className="price-about">$ 550</p>
                </div>
                <div className="amount-order">
                  <div className="minus-amount">-</div>
                  <p className="amount-amount">1</p>
                  <div className="plus-amount">+</div>
                </div>
              </div>
            </div>

            <div className="action-order">
              <p className="size-action">L</p>
              <div className="delete-action">
                <img src={trash} alt="" />
              </div>
            </div>
          </div>
          <div className="cart-order">
            <div className="cart-gap">
              <div className="img-order">
                <img src={nikeCart} alt="" />
              </div>

              <div className="about-order">
                <div className="gap-order">
                  <p className="name-about">Nike CLub max</p>
                  <p className="price-about">$ 550</p>
                </div>
                <div className="amount-order">
                  <div className="minus-amount">-</div>
                  <p className="amount-amount">1</p>
                  <div className="plus-amount">+</div>
                </div>
              </div>
            </div>

            <div className="action-order">
              <p className="size-action">L</p>
              <div className="delete-action">
                <img src={trash} alt="" />
              </div>
            </div>
          </div>
          <div className="cart-order">
            <div className="cart-gap">
              <div className="img-order">
                <img src={nikeCart} alt="" />
              </div>

              <div className="about-order">
                <div className="gap-order">
                  <p className="name-about">Nike CLub max</p>
                  <p className="price-about">$ 550</p>
                </div>
                <div className="amount-order">
                  <div className="minus-amount">-</div>
                  <p className="amount-amount">1</p>
                  <div className="plus-amount">+</div>
                </div>
              </div>
            </div>

            <div className="action-order">
              <p className="size-action">L</p>
              <div className="delete-action">
                <img src={trash} alt="" />
              </div>
            </div>
          </div>
          <div className="cart-order">
            <div className="cart-gap">
              <div className="img-order">
                <img src={nikeCart} alt="" />
              </div>

              <div className="about-order">
                <div className="gap-order">
                  <p className="name-about">Nike CLub max</p>
                  <p className="price-about">$ 550</p>
                </div>
                <div className="amount-order">
                  <div className="minus-amount">-</div>
                  <p className="amount-amount">1</p>
                  <div className="plus-amount">+</div>
                </div>
              </div>
            </div>

            <div className="action-order">
              <p className="size-action">L</p>
              <div className="delete-action">
                <img src={trash} alt="" />
              </div>
            </div>
          </div>
          <div className="cart-order">
            <div className="cart-gap">
              <div className="img-order">
                <img src={nikeCart} alt="" />
              </div>

              <div className="about-order">
                <div className="gap-order">
                  <p className="name-about">Nike CLub max</p>
                  <p className="price-about">$ 550</p>
                </div>
                <div className="amount-order">
                  <div className="minus-amount">-</div>
                  <p className="amount-amount">1</p>
                  <div className="plus-amount">+</div>
                </div>
              </div>
            </div>

            <div className="action-order">
              <p className="size-action">L</p>
              <div className="delete-action">
                <img src={trash} alt="" />
              </div>
            </div>
          </div>
          <div className="cart-order">
            <div className="cart-gap">
              <div className="img-order">
                <img src={nikeCart} alt="" />
              </div>

              <div className="about-order">
                <div className="gap-order">
                  <p className="name-about">Nike CLub max</p>
                  <p className="price-about">$ 550</p>
                </div>
                <div className="amount-order">
                  <div className="minus-amount">-</div>
                  <p className="amount-amount">1</p>
                  <div className="plus-amount">+</div>
                </div>
              </div>
            </div>

            <div className="action-order">
              <p className="size-action">L</p>
              <div className="delete-action">
                <img src={trash} alt="" />
              </div>
            </div>
          </div>
          <div className="cart-order">
            <div className="cart-gap">
              <div className="img-order">
                <img src={nikeCart} alt="" />
              </div>

              <div className="about-order">
                <div className="gap-order">
                  <p className="name-about">Nike CLub max</p>
                  <p className="price-about">$ 550</p>
                </div>
                <div className="amount-order">
                  <div className="minus-amount">-</div>
                  <p className="amount-amount">1</p>
                  <div className="plus-amount">+</div>
                </div>
              </div>
            </div>

            <div className="action-order">
              <p className="size-action">L</p>
              <div className="delete-action">
                <img src={trash} alt="" />
              </div>
            </div>
          </div>
          <div className="cart-order">
            <div className="cart-gap">
              <div className="img-order">
                <img src={nikeCart} alt="" />
              </div>

              <div className="about-order">
                <div className="gap-order">
                  <p className="name-about">Nike CLub max</p>
                  <p className="price-about">$ 550</p>
                </div>
                <div className="amount-order">
                  <div className="minus-amount">-</div>
                  <p className="amount-amount">1</p>
                  <div className="plus-amount">+</div>
                </div>
              </div>
            </div>

            <div className="action-order">
              <p className="size-action">L</p>
              <div className="delete-action">
                <img src={trash} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="check-order">
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
            <button onClick={handleCheckout} className="button-submit">
                Checkout
            </button>
        </div>
      </div>
    </>
  );
}
