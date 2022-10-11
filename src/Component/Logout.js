import React from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";

const Logout = () => {
  const { handleSubmit } = useForm();
  // let navigate = useNavigate();
  const { setUser } = useUserContext();

  const onSubmit = async () => {
    // get out of Auth0
    setUser();
  };

  return (
    <div>
      <div onClick={handleSubmit(onSubmit)}>Logout</div>
    </div>
  );
};

export default Logout;
