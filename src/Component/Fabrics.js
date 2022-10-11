import React, { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const Fabrics = () => {
  const [fabrics, setFabrics] = useState([]);

  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/fabrics`)
      .then((res) => res.data)
      .then((res) => {
        console.log(res);
        setFabrics(res);
      });
  }, []);

  return (
    <div>
      {fabrics.map((fabric, index) => {
        return <div key={index}>{fabric.fabric_name}</div>;
      })}
    </div>
  );
};

export default Fabrics;
