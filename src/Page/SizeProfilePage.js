import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import NewSizeForm from "../Component/NewSizeForm";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const SizeProfilePage = () => {
  const { user, getAccessTokenSilently } = useAuth0();
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

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <div hidden={isAdd ? true : false}>
        <Button variant="contained" onClick={() => handleAdd()}>
          +
        </Button>
      </div>
      <div hidden={isAdd ? false : true}>
        <CloseIcon onClick={() => handleAdd()} />
        <NewSizeForm user={user} handleAdd={handleAdd} />
      </div>

      {sizeProfiles
        .slice(0)
        .reverse()
        .map((size, index) => {
          return (
            <div key={index}>
              <Grid2 container columnSpacing={2} rowSpacing={2}>
                {/* Size Profile Card */}
                <Grid2 xs={6}>
                  <label>Category: {size.categoryByUser}</label>
                </Grid2>
                <Grid2 xs={6}>{size.measurementType}</Grid2>
                <Grid2 xs={5}>
                  Collar: {size.collar}
                  <br />
                  Shoulder: {size.shoulder}
                  <br />
                  Chest: {size.chest}
                  <br />
                  Waist: {size.waist}
                  <br />
                  Elbow: {size.elbow}
                </Grid2>
                <Grid2 xs={5}>
                  Sleeves Length: {size.sleevesLength}
                  <br />
                  Sleeves Width: {size.sleevesWidth}
                  <br />
                  Left Cuff: {size.leftCuff}
                  <br />
                  Right Cuff: {size.rightCuff}
                  <br />
                  Shirt Length: {size.shirtLength}
                </Grid2>
                <Grid2 xs={2}>
                  <CloseIcon
                    onClick={() => {
                      handleDelete(size);
                    }}
                  />
                </Grid2>
                <Grid2></Grid2>
              </Grid2>
            </div>
          );
        })}
    </div>
  );
};

export default SizeProfilePage;
