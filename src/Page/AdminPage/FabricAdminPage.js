import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const FabricAdminPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    watch,
  } = useForm({ mode: "onTouched" });

  const { getAccessTokenSilently } = useAuth0();

  const onSubmit = async (data) => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: "https://group1-project3/api",
        scope: "read:current_user",
      });
      await axios.post(
        `${BACKEND_URL}/fabric`,
        {
          fabricName: data.fabricName,
          productQuantity: data.fabricQuantity,
          description: data.fabricDescription,
          cost: data.fabricCost,
          style: [data.style],
          colour: [data.fabricColour],
          material: [data.fabricMaterial],
          pattern: [data.fabricPattern],
          imageOne: data.imageOne,
          imageTwo: data.imageTwo,
        },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    console.log(watch("style"));
  }, [watch("style")]);
  return (
    <div>
      <header>Customer Orders</header>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid2 container rowSpacing={2} columnSpacing={2}>
          {/* Fabric Name row */}
          <Grid2 xs={12}>
            <label>Fabric Name</label>
            <input
              {...register("fabricName", {
                required: "⚠ Required",
              })}
            />
            <div className="validation-error">{errors.fabricName?.message}</div>
          </Grid2>

          {/* Fabric Quantity row */}
          <Grid2 xs={12}>
            <label>Fabric Quantity</label>
            <input
              {...register("fabricQuantity", {
                required: "⚠ Required",
              })}
            />
            <div className="validation-error">
              {errors.fabricQuantity?.message}
            </div>
          </Grid2>

          {/* Fabric description row */}
          <Grid2 xs={12}>
            <label>Fabric Description</label>
            <input
              {...register("fabricDescription", {
                required: false,
              })}
            />
            <div className="validation-error">
              {errors.fabricDescription?.message}
            </div>
          </Grid2>

          {/* Fabric cost row */}
          <Grid2 xs={12}>
            <label>Fabric cost</label>
            <input
              {...register("fabricCost", {
                required: "⚠ Required",
              })}
            />
            <div className="validation-error">{errors.fabricCost?.message}</div>
          </Grid2>

          {/* Fabric style row */}
          <Grid2 xs={12}>
            <select {...register("style")}>
              <option value="casual">Casual</option>
              <option value="semi-formal">Semi-formal</option>
              <option value="formal">Formal</option>
            </select>
          </Grid2>

          {/* Fabric Colour row */}
          <Grid2 xs={12}>
            <label>Fabric colour</label>
            <input
              {...register("fabricColour", {
                required: "⚠ Required",
              })}
            />
            <div className="validation-error">
              {errors.fabricColour?.message}
            </div>
          </Grid2>

          {/* Fabric Material row */}
          <Grid2 xs={12}>
            <label>Fabric material</label>
            <input
              {...register("fabricMaterial", {
                required: "⚠ Required",
              })}
            />
            <div className="validation-error">
              {errors.fabricMaterial?.message}
            </div>
          </Grid2>

          {/* Fabric pattern row */}
          <Grid2 xs={12}>
            <label>Fabric pattern</label>
            <input
              {...register("fabricPattern", {
                required: "⚠ Required",
              })}
            />
            <div className="validation-error">
              {errors.fabricPattern?.message}
            </div>
          </Grid2>

          {/* Fabric image one row */}
          <Grid2 xs={12}>
            <label>Fabric image one URL</label>
            <input
              {...register("imageOne", {
                required: "⚠ Required",
              })}
            />
            <div className="validation-error">{errors.imageOne?.message}</div>
          </Grid2>

          {/* Fabric image two row */}
          <Grid2 xs={12}>
            <label>Fabric image two URL</label>
            <input
              {...register("imageTwo", {
                required: false,
              })}
            />
            <div className="validation-error">{errors.imageTwo?.message}</div>
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

export default FabricAdminPage;
