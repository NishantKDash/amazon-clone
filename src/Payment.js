import "./payment.css";
import { useStateValue } from "./StateProvider";
import { Link, useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
import CheckoutProduct from "./CheckoutProduct";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
import { db } from "./Firebase";

function Payment() {
  const history = useNavigate();
  const [{ basket, user }, dispatch] = useStateValue();
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);

  console.log("Client Secret", clientSecret);
  console.log(user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((result) => {
        //payment intent = payment confirmation

        console.log(result);
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(result.paymentIntent.id)
          .set({
            basket: basket,
            amount: result.paymentIntent.amount,
            created: result.paymentIntent.created,
          });
        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({ type: "EMPTY_BASKET" });
        history("/order", { replace: true });
      });
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };
  return (
    <div className="payment">
      <div className="payment-container">
        <h1>
          CheckOut(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            <p>Address line 1</p>
            <p>Address Line 2</p>
          </div>
        </div>
        <div className="payment-section">
          <div className="payment-title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment-items">
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
        <div className="payment-section">
          <div className="payment-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange}></CardElement>
              <div className="payment-priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <p>
                        <strong>{value}</strong>
                      </p>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)} // Part of the homework
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"₹"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
