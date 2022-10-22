import React from "react";
import { useForm } from "react-hook-form";
import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
  const { handleSubmit } = useForm();

  const { logout } = useAuth0();

  const onSubmit = async () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <div>
      <div onClick={handleSubmit(onSubmit)}>Logout</div>
    </div>
  );
};

export default Logout;
