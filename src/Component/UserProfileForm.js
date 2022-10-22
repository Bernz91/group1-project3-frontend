import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const UserProfileForm = ({ userDetails }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
  } = useForm({ mode: "onTouched" });

  const [email, setEmail] = useState();

  useEffect(() => {
    if (userDetails) {
      userDetails.first_name && setValue("firstName", userDetails.first_name);
      userDetails.last_name && setValue("lastName", userDetails.last_name);
      userDetails.phone && setValue("phone", userDetails.phone);
      userDetails.shipping_address &&
        setValue("shippingAddress", userDetails.shipping_address);
      userDetails.email && setEmail(userDetails.email);
    }
  }, [userDetails]);

  const onSubmit = (data) => {
    axios
      .put(`${BACKEND_URL}/users/${userDetails.id}`, {
        first_name: data.firstName,
        last_name: data.lastName,
        phone: data.phone,
        shipping_address: data.shippingAddress,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* first name row */}

      <Grid2 xs={12}>
        <label>First Name</label>
        <input
          {...register("firstName", {
            required: true,
            pattern: {
              value: /^[-a-zA-Z@.+_]+$/i,
              message: "⚠ Please enter a valid first name",
            },
          })}
        />
        <div className="validation-error">{errors.firstName?.message}</div>
      </Grid2>

      {/* last name row */}
      <Grid2 xs={12}>
        <label>Last Name</label>
        <input
          {...register("lastName", {
            required: true,
            pattern: {
              value: /^[-a-zA-Z@.+_]+$/i,
              message: "⚠ Please enter a valid last name",
            },
          })}
        />
        <div className="validation-error">{errors.lastName?.message}</div>
      </Grid2>

      {/* Email row */}
      <Grid2 xs={12}>
        <label>Email</label>
        <div>{email}</div>
      </Grid2>

      {/* Phone row */}
      <Grid2 xs={12}>
        <label>Phone</label>
        <input
          {...register("phone", {
            pattern: {
              value: /^[0-9]+$/i,
              message: "⚠ Please enter a valid phone number",
            },
          })}
        />
        <div className="validation-error">{errors.phone?.message}</div>
      </Grid2>

      {/* Phone row */}
      <Grid2 xs={12}>
        <label>Default Shipping Address</label>
        <input {...register("shippingAddress")} />
      </Grid2>

      {/* Save row */}
      <Grid2 xs={12}>
        <Button
          variant="contained"
          type="submit"
          disabled={!isDirty || !isValid}
        >
          Save
        </Button>
      </Grid2>
    </form>
  );
};

export default UserProfileForm;
