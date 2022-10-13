import React from "react";
import { useUserContext } from "../Context/UserContext";
import { useForm } from "react-hook-form";
import LoginPage from "./LoginPage";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const EditProfileDetails = (input) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register(input, { required: true })} />
        <div className="validation-error">{errors.input?.message}</div>
      </form>
    </div>
  );
};

const UserAccountPage = () => {
  const { user, setUser } = useUserContext;

  return (
    <div>
      {/* !!! to be changed to when there's no user then go to login page !!!!!*/}
      {user ? (
        <LoginPage />
      ) : (
        <Grid2 container columnSpacing={2} rowSpacing={2}>
          <Grid2 xs={5}>
            <Button variant="contained">Size Profiles</Button>
          </Grid2>
          <Grid2 xs={5}>
            <Button variant="contained">Order Details</Button>
          </Grid2>
          <Grid2 xs={12}>
            <label>First Name</label>
            {/* <div>{user.first_name}</div> */}
          </Grid2>
          <Grid2 xs={12}>
            <label>Last Name</label>
            {/* <div>{user.last_name}</div> */}
          </Grid2>
          <Grid2 xs={12}>
            <label>Email</label>
            {/* <div>{user.email}</div> */}
          </Grid2>
          <Grid2 xs={12}>
            <label>Phone</label>
            {/* <div>{user.phone}</div> */}
          </Grid2>
          <Grid2 xs={12}>
            <label>Password</label>
            {/* <div>{user.password}</div> */}
          </Grid2>
        </Grid2>
      )}
    </div>
  );
};
export default UserAccountPage;
