import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import "../CSS/User.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const UserProfileForm = ({ userDetails }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
  } = useForm({ mode: "onTouched" });

  const [email, setEmail] = useState();

  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    if (userDetails) {
      userDetails.firstName && setValue("firstName", userDetails.firstName);
      userDetails.lastName && setValue("lastName", userDetails.lastName);
      userDetails.phone && setValue("phone", userDetails.phone);
      userDetails.shippingAddress &&
        setValue("shippingAddress", userDetails.shippingAddress);
      userDetails.email && setEmail(userDetails.email);
    }
  }, [userDetails]);

  const onSubmit = async (data) => {
    try {
      // Retrieve access token
      const accessToken = await getAccessTokenSilently({
        audience: "https://group1-project3/api",
        scope: "read:current_user",
      });
      await axios
        .put(
          `${BACKEND_URL}/users/${userDetails.id}`,
          {
            firstName: data.firstName,
            lastName: data.lastName,
            phone: data.phone,
            shippingAddress: data.shippingAddress,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(function (response) {
          console.log(response);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div align="middle">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2
          container
          columnSpacing={2}
          rowSpacing={2}
          className="userPageGrid"
        >
          {/* first name row */}
          <Grid2 xs={12}>
            <label>First Name</label>
            <input
              className="userInput"
              {...register("firstName", {
                required: "⚠ Required",
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
              className="userInput"
              {...register("lastName", {
                required: "⚠ Required",
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
              className="userInput"
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
            <input className="userInput" {...register("shippingAddress")} />
          </Grid2>

          {/* Save row */}
          <Grid2 xs={12}>
            <Button variant="contained" type="submit" disabled={!isValid}>
              Save
            </Button>
          </Grid2>
        </Grid2>
      </form>
    </div>
  );
};

export default UserProfileForm;
