import React, { useState, useEffect } from "react";
import axios from "axios";

const BACKEND_URL = process.env.BACKEND_URL;

const Fabrics = () => {
  const [fabrics, setFabrics] = useState([]);
  
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/fabrics`)
      .then((res) => res.data)
      .then((res) => setFabrics(res));
  });

  return <div>This is to map the list of fabric</div>;
};

export default Fabrics;
