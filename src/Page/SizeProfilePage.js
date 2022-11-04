import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import NewSizeForm from "../Component/NewSizeForm";
import "../CSS/SizeProfilePage.css";
import RedirectLogin from "../Component/RedirectLogin";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const SizeProfilePage = () => {
  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0();
  const [sizeProfiles, setSizeProfiles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isAdd, setAdd] = useState(false);

  //for loading the page and adding new size profile
  useEffect(() => {
    const getMeasurement = async () => {
      if (user) {
        try {
          const accessToken = await getAccessTokenSilently({
            audience: "https://group1-project3/api",
            scope: "read:current_user",
          });
          await axios
            .get(`${BACKEND_URL}/users/${user.sub}/measurements`, {
              headers: {
                Authorization: `Bearer ${accessToken}`,
              },
            })
            .then((res) => res.data)
            .then((res) => {
              setSizeProfiles(res);
              setLoading(false);
            });
        } catch (e) {
          console.log(e);
        }
      }
    };
    getMeasurement();
  }, [user, isAdd]);

  const handleDelete = async (size) => {
    setLoading(true);
    try {
      const accessToken = await getAccessTokenSilently({
        audience: "https://group1-project3/api",
        scope: "read:current_user",
      });
      await axios.delete(
        `${BACKEND_URL}/users/${user.sub}/measurements/${size.id}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      await axios
        .get(`${BACKEND_URL}/users/${user.sub}/measurements`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => res.data)
        .then((res) => {
          setSizeProfiles(res);
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const handleAdd = (remark) => {
    if (remark === "added new size") {
      setAdd((prevState) => !prevState);
    } else if (sizeProfiles.length >= 5) {
      alert("you can only have 5 different size profiles");
      return;
    } else setAdd((prevState) => !prevState);
  };

  if (!isAuthenticated && isLoading) {
    return <RedirectLogin />;
  } else if (isLoading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      {!isAuthenticated ? (
        <div>
          <RedirectLogin />
        </div>
      ) : (
        <div>
          <br />
          <div align="middle">
            <Grid2 container columnSpacing={2} rowSpacing={2}>
              <Grid2 xs={12}>
                <div hidden={isAdd ? true : false}>
                  <Button variant="contained" onClick={() => handleAdd()}>
                    +
                  </Button>
                </div>
                <div
                  hidden={isAdd ? false : true}
                  className="newSizeProfileCard"
                >
                  <div align="right">
                    <CloseIcon onClick={() => handleAdd()} />
                  </div>
                  <div className="newSizeProfileForm">
                    <NewSizeForm user={user} handleAdd={handleAdd} />
                  </div>
                </div>
              </Grid2>
            </Grid2>
          </div>
          <br />
          {sizeProfiles
            .slice(0)
            .reverse()
            .map((size, index) => {
              return (
                <div key={index} align="middle">
                  <Grid2
                    container
                    columnSpacing={2}
                    rowSpacing={2}
                    className="SizeProfileCards"
                  >
                    {/* Size Profile Card */}
                    <Grid2 xs={10.5}>
                      <label className="sizeProfileCategoryName">
                        Category: {size.categoryByUser}
                      </label>
                    </Grid2>
                    <Grid2 xs={1.5}>
                      <CloseIcon
                        onClick={() => {
                          handleDelete(size);
                        }}
                      />
                    </Grid2>
                    <Grid2 xs={6}>
                      <label>Collar: </label>
                      {size.collar} {size.measurementType}
                      <br />
                      <label>Shoulder: </label>
                      {size.shoulder} {size.measurementType}
                      <br />
                      <label>Chest: </label>
                      {size.chest} {size.measurementType}
                      <br />
                      <label>Waist: </label>
                      {size.waist} {size.measurementType}
                      <br />
                      <label>Elbow: </label>
                      {size.elbow} {size.measurementType}
                    </Grid2>
                    <Grid2 xs={6}>
                      <label>Sleeves Length: </label> {size.sleevesLength}{" "}
                      {size.measurementType}
                      <br />
                      <label>Sleeves Width: </label>
                      {size.sleevesWidth} {size.measurementType}
                      <br />
                      <label>Left Cuff: </label>
                      {size.leftCuff} {size.measurementType}
                      <br />
                      <label>Right Cuff: </label>
                      {size.rightCuff} {size.measurementType}
                      <br />
                      <label>Shirt Length: </label>
                      {size.shirtLength} {size.measurementType}
                    </Grid2>
                  </Grid2>
                  <br />
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default SizeProfilePage;
