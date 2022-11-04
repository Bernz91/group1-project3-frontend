import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import Button from "@mui/material/Button";
import { useAuth0 } from "@auth0/auth0-react";
import { useAdminContext } from "../../Context/AdminContext";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const FabricAdminPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({ mode: "onTouched" });

  const { getAccessTokenSilently } = useAuth0();
  const { admin } = useAdminContext();
  const [fabrics, setFabrics] = useState([]);
  const [isAdding, setAdding] = useState(false);

  useEffect(() => {
    console.log(isAdding);
    try {
      axios
        .get(`${BACKEND_URL}/fabrics`)
        .then((res) => res.data)
        .then((res) => {
          console.log(res);
          setFabrics(res);
        });
    } catch (e) {
      console.log(e);
    }
  }, [admin, isAdding]);

  const onSubmit = async (data) => {
    try {
      const accessToken = await getAccessTokenSilently({
        audience: "https://group1-project3/api",
        scope: "read:current_user",
      });
      await axios.post(
        `${BACKEND_URL}/fabrics`,
        {
          fabricName: data.fabricName,
          productQuantity: Number(data.fabricQuantity),
          description: data.fabricDescription,
          cost: Number(data.fabricCost),
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
      setAdding(!isAdding);
      reset();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      {admin ? (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <header>Add Fabric</header>
            <Grid2 container rowSpacing={2} columnSpacing={2}>
              {/* Fabric Name row */}
              <Grid2 xs={12}>
                <label>Fabric Name</label>
                <input
                  {...register("fabricName", {
                    required: "⚠ Required",
                  })}
                />
                <div className="validation-error">
                  {errors.fabricName?.message}
                </div>
              </Grid2>

              {/* Fabric Quantity row */}
              <Grid2 xs={12}>
                <label>Fabric Quantity</label>
                <input
                  autoComplete="off"
                  {...register("fabricQuantity", {
                    required: "⚠ Required",

                    pattern: {
                      value: /^[0-9]+$/i,
                      message: "⚠ Please enter an integer",
                    },
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
                    pattern: {
                      value: /^[0-9]+$/i,
                      message: "⚠ Please enter an integer",
                    },
                  })}
                />
                <div className="validation-error">
                  {errors.fabricCost?.message}
                </div>
              </Grid2>

              {/* Fabric style row */}
              <Grid2 xs={12}>
                <label>Fabric style</label>
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
                <div className="validation-error">
                  {errors.imageOne?.message}
                </div>
              </Grid2>

              {/* Fabric image two row */}
              <Grid2 xs={12}>
                <label>Fabric image two URL</label>
                <input
                  {...register("imageTwo", {
                    required: false,
                  })}
                />
                <div className="validation-error">
                  {errors.imageTwo?.message}
                </div>
              </Grid2>

              {/* Save row */}
              <Grid2 xs={12}>
                <Button variant="contained" type="submit" disabled={!isValid}>
                  Save
                </Button>
              </Grid2>
            </Grid2>
          </form>
          <ImageList sx={{ width: 390, height: 600 }}>
            {fabrics.map((fabric, index) => (
              <ImageListItem key={index}>
                <img
                  src={`${fabric.imageOne}?w=248&fit=crop&auto=format`}
                  srcSet={`${fabric.imageOne}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={fabric.fabricName}
                  loading="lazy"
                />
                <ImageListItemBar
                  title={fabric.fabricName}
                  subtitle={`Price: ${fabric.cost}`}
                  actionIcon={
                    <IconButton
                      sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                      aria-label={`info about ${fabric.fabricName}`}
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
      ) : (
        "Only admin can access this page"
      )}
    </div>
  );
};

export default FabricAdminPage;
