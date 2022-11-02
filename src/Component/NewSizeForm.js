import React from "react";
import { useForm } from "react-hook-form";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import "../CSS/SizeProfilePage.css";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const NewSizeForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: "onTouched" });

  const { getAccessTokenSilently } = useAuth0();

  const onSubmit = async (data) => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: "https://group1-project3/api",
        scope: "read:current_user",
      });
      await axios
        .post(
          `${BACKEND_URL}/users/${props.user.sub}/measurements`,
          {
            categoryByUser: data.categoryByUser,
            measurementType: data.measurementType,
            collar: data.collar,
            shoulders: data.shoulders,
            chest: data.chest,
            waist: data.waist,
            sleevesLength: data.sleevesLength,
            sleevesWidth: data.sleevesWidth,
            elbow: data.elbow,
            leftCuff: data.leftCuff,
            rightCuff: data.rightCuff,
            shirtLength: data.shirtLength,
          },
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        )
        .then(function (res) {
          console.log(res);
          props.handleAdd("added new size");
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid2 container columnSpacis={2} rowSpacing={2}>
        {/* category by user  row */}

        <Grid2 xs={10}>
          <label>Size Name</label>{" "}
          <input
            {...register("categoryByUser", {
              required: true,
            })}
          />
          <div className="validation-error">
            {errors.categoryByUser?.message}
          </div>
        </Grid2>
        <Grid2 xs={2}>
          <select {...register("measurementType")}>
            <option value="cm">cm</option>
            <option value="inc">inch</option>
          </select>
        </Grid2>

        <Grid2 xs={5.75}>
          <label>Collar</label>
          <br />
          <input
            className="newSizeProfileForm"
            {...register("collar", {
              required: true,
              pattern: {
                value: /^[0-9]+$/i,
                message: "⚠ Please enter a number",
              },
            })}
          />
          <div className="validation-error">{errors.collar?.message}</div>
          <br />
          <label>Shoulder</label>
          <br />
          <input
            className="newSizeProfileForm"
            {...register("shoulder", {
              required: true,
              pattern: {
                value: /^[0-9]+$/i,
                message: "⚠ Please enter a number",
              },
            })}
          />
          <div className="validation-error">{errors.shoulder?.message}</div>
          <br />
          <label>Chest</label>
          <br />
          <input
            className="newSizeProfileForm"
            {...register("chest", {
              required: true,
              pattern: {
                value: /^[0-9]+$/i,
                message: "⚠ Please enter a number",
              },
            })}
          />
          <div className="validation-error">{errors.chest?.message}</div>
          <br />
          <label>Waist</label>
          <br />
          <input
            className="newSizeProfileForm"
            {...register("waist", {
              required: true,
              pattern: {
                value: /^[0-9]+$/i,
                message: "⚠ Please enter a number",
              },
            })}
          />
          <div className="validation-error">{errors.waist?.message}</div>
          <br />
          <label>Elbow</label>
          <br />
          <input
            className="newSizeProfileForm"
            {...register("elbow", {
              required: true,
              pattern: {
                value: /^[0-9]+$/i,
                message: "⚠ Please enter a number",
              },
            })}
          />
          <div className="validation-error">{errors.elbow?.message}</div>
        </Grid2>
        <Grid2 xs={0.5}></Grid2>
        <Grid2 xs={5.75}>
          <label>Sleeves Length</label>
          <br />
          <input
            className="newSizeProfileForm"
            {...register("sleevesLength", {
              required: true,
              pattern: {
                value: /^[0-9]+$/i,
                message: "⚠ Please enter a number",
              },
            })}
          />
          <div className="validation-error">
            {errors.sleevesLength?.message}
          </div>
          <br />
          <label>Sleeves Width</label>
          <br />
          <input
            className="newSizeProfileForm"
            {...register("sleevesWidth", {
              required: true,
              pattern: {
                value: /^[0-9]+$/i,
                message: "⚠ Please enter a number",
              },
            })}
          />
          <div className="validation-error">{errors.sleevesWidth?.message}</div>
          <br />
          <label>Left Cuff</label>
          <br />
          <input
            className="newSizeProfileForm"
            {...register("leftCuff", {
              required: true,
              pattern: {
                value: /^[0-9]+$/i,
                message: "⚠ Please enter a number",
              },
            })}
          />
          <div className="validation-error">{errors.leftCuff?.message}</div>
          <br />
          <label>Right Cuff</label>
          <br />
          <input
            className="newSizeProfileForm"
            {...register("rightCuff", {
              required: true,
              pattern: {
                value: /^[0-9]+$/i,
                message: "⚠ Please enter a number",
              },
            })}
          />
          <div className="validation-error">{errors.rightCuff?.message}</div>
          <br />
          <label>Shirt Length</label>
          <br />
          <input
            className="newSizeProfileForm"
            {...register("shirtLength", {
              required: true,
              pattern: {
                value: /^[0-9]+$/i,
                message: "⚠ Please enter a number",
              },
            })}
          />
          <div className="validation-error">{errors.shirtLength?.message}</div>
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
      </Grid2>
    </form>
  );
};

export default NewSizeForm;
