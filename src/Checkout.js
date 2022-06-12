import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout-left">
        <img
          className="checkout-ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/June22/Rs1Deal/HUB__01-07_PC.jpg"
          alt=""
        ></img>
        <div>
          <h3>
            <b>Hello</b>,{user ? user?.email : "Guest"}
          </h3>

          <br></br>

          <h2 className="checkout-title">Your Basket</h2>

          {basket.map((item) => (
          
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout-right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
