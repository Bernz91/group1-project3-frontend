import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";

const UserProfileForm = ({ userDetails }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    setValue,
  } = useForm({ mode: "onTouched" });

  useEffect(() => {
    userDetails.firstName && setValue([{ firstName: userDetails.first_name }]);
    userDetails.last_name && setValue([{ lastname: userDetails.last_name }]);
    userDetails.phone && setValue([{ phone: userDetails.phone }]);
  }, [userDetails]);

  const onSubmit = (data) => {
    // to put the authO here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* first name row */}

      <Grid2 xs={12}>
        <label>First Name</label>
        <input
          {...register("firstName", {
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
        <div>{userDetails.email}</div>
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
        <div className="validation-error">{errors.lastName?.message}</div>
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
