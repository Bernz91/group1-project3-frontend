import React from "react";

const Home = () => {
  return (
    <div>
      This is home
      {console.log(process.env.BACKEND_URL)}
    </div>
  );
};

export default Home;
