import React, { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const OrderSummary = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/orders`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        setOrders(res);
      });
  }, []);

  return (
    <div>
      {orders.map((order, index) => {
        return <div key={index}>{order}</div>;
      })}
    </div>
  );
};

export default OrderSummary;
