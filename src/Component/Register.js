import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
    watch,
  } = useForm({ mode: "onTouched" });

  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = (data) => {
    console.log(data);
    reset();
    // to put the authO here
  };

  return (
    <div className="vertical-center">
      <Grid2 container columnSpacing={2} rowSpacing={2}>
        <Grid2 xs={12}>
          <div className="login-logo">Logo Here</div>
          <div className="login-subtitle">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </Grid2>
        <Grid2></Grid2>
      </Grid2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container columnSpacing={2} rowSpacing={2}>
          {/* first name row */}
          <Grid2 xs={2} md={3}></Grid2>
          <Grid2 xs={8} md={6}>
            <label>First Name</label>
            <input
              {...register("firstName", {
                required: "⚠ First Name is required",
                pattern: {
                  value: /^[-a-zA-Z@.+_]+$/i,
                  message: "⚠ Please enter a valid first name",
                },
              })}
            />
            <div className="validation-error">{errors.firstName?.message}</div>
          </Grid2>
          <Grid2 xs={2} md={3}></Grid2>

          {/* last name row */}
          <Grid2 xs={2} md={3}></Grid2>
          <Grid2 xs={8} md={6}>
            <label>Last Name</label>
            <input
              {...register("lastName", {
                required: "⚠ Last Name is required",
                pattern: {
                  value: /^[-a-zA-Z@.+_]+$/i,
                  message: "⚠ Please enter a valid last name",
                },
              })}
            />
            <div className="validation-error">{errors.lastName?.message}</div>
          </Grid2>
          <Grid2 xs={2} md={3}></Grid2>

          {/* Email row */}
          <Grid2 xs={2} md={3}></Grid2>
          <Grid2 xs={8} md={6}>
            <label>Email</label>
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

          {/* password row */}
          <Grid2 xs={2} md={3}></Grid2>
          <Grid2 xs={8} md={6}>
            <label>Password</label>
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

          {/* confirm password row */}
          <Grid2 xs={2} md={3}></Grid2>
          <Grid2 xs={8} md={6}>
            <label>Confirm Password</label>
            <input
              type="password"
              {...register("confirm_password", {
                required: true,
                validate: (value) =>
                  value === password.current || "The passwords do not match",
              })}
            />
            <div className="validation-error">
              {errors.confirm_password?.message}
            </div>
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
              Register
            </Button>
          </Grid2>
          <Grid2 xs={2} md={3}></Grid2>

          {/* terms and conditions row */}
          <Grid2 xs={2} md={3}></Grid2>
          <Grid2 xs={8} md={6}>
            <div className="forgot-password">
              By providing your email address, you agree to our Terms of Service
            </div>
          </Grid2>
          <Grid2 xs={2} md={3}></Grid2>
        </Grid2>
      </form>
    </div>
  );
};

export default Register;
