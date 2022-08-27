import moment from "moment";
import React from "react";
import CurrencyFormat from "react-currency-format";
import CheckoutProduct from "./CheckoutProduct";
import "./Orders.css";

const Orders = ({ order }) => {
  return (
    <div class="orders">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY , h:mma")} </p>

      <p class="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        ></CheckoutProduct>
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order-total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
    </div>
  );
};

export default Orders;
