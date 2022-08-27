import React from "react";
import "./Order.css";
import { useState, useEffect } from "react";
import { db } from "./Firebase";
import { useStateValue } from "./StateProvider";
import Orders from "./Orders.js";

const Order = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div class="order">
      <h1>Your Orders</h1>

      <div class="order_order">
        {orders?.map((order) => (
          <Orders order={order} />
        ))}
      </div>
    </div>
  );
};

export default Order;
