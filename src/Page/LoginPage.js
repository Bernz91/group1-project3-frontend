import React from "react";
import { useForm } from "react-hook-form";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useUserContext } from "../Context/UserContext";

const LoginPage = () => {
  const { setUser } = useUserContext();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({ mode: "onTouched" });

  const onSubmit = (data) => {
    // to put the authO here
    setUser(data);
  };

  return (
    <div className="vertical-center">
      <Grid2 container columnSpacing={2} rowSpacing={2}>
        <Grid2 xs={12}>
          <div className="login-logo">Logo Here</div>
          <div className="login-subtitle">
            Do not have an account?
            <Link to="/register"> Register</Link>
          </div>
        </Grid2>
        <Grid2></Grid2>
      </Grid2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container columnSpacing={2} rowSpacing={2}>
          {/* Email row */}
          <Grid2 xs={2} md={3}></Grid2>
          <Grid2 xs={8} md={6}>
            <label>Email:</label>
            <input
              {...register("email", {
                required: "⚠ Email Address is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "⚠ Please enter a valid email",
                },
              })}
            />
            <div className="validation-error">{errors.email?.message}</div>
          </Grid2>
          <Grid2 xs={2} md={3}></Grid2>

          {/* third row */}
          <Grid2 xs={2} md={3}></Grid2>
          <Grid2 xs={8} md={6}>
            <label>Password:</label>
            <input
              type="password"
              {...register("password", {
                required: "⚠ Password is required",
                minLength: {
                  value: 8,
                  message: "Password must have at least 8 characters",
                },
              })}
            />
            <div className="validation-error">{errors.password?.message}</div>
          </Grid2>
          <Grid2 xs={2} md={3}></Grid2>

          {/* submit row */}
          <Grid2 xs={2} md={3}></Grid2>
          <Grid2 xs={8} md={6}>
            <Button
              variant="contained"
              type="submit"
              disabled={!isDirty || !isValid}
            >
              Login
            </Button>
          </Grid2>
          <Grid2 xs={2} md={3}></Grid2>

          {/* Forgot password row */}
          <Grid2 xs={2} md={3}></Grid2>
          <Grid2 xs={8} md={6}>
            <div className="forgot-password">Forgot password</div>
          </Grid2>
          <Grid2 xs={2} md={3}></Grid2>
        </Grid2>
      </form>
    </div>
  );
};

export default LoginPage;
