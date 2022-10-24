import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import NewSizeForm from "../Component/NewSizeForm";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const SizeProfilePage = () => {
  const { user } = useAuth0();
  const [sizeProfiles, setSizeProfiles] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isEdit, setEdit] = useState(false);
  const [isAdd, setAdd] = useState(false);

  useEffect(() => {
    if (user) {
      try {
        axios
          .get(`${BACKEND_URL}/users/${user.sub}/measurements`)
          .then((res) => res.data)
          .then((res) => {
            setSizeProfiles(res);
            setLoading(false);
          });
      } catch (e) {
        console.log(e);
      }
    }
  }, [user, isAdd]);

  const handleDelete = async (size) => {
    setLoading(true);
    try {
      await axios.delete(
        `${BACKEND_URL}/users/${user.sub}/measurements/${size.id}`
      );

      const allMeasurement = await axios
        .get(`${BACKEND_URL}/users/${user.sub}/measurements`)
        .then((res) => res.data)
        .then((res) => {
          setSizeProfiles(res);
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSaveEdit = async (size, index) => {
    setLoading(true);
    try {
      await axios
        .put(`${BACKEND_URL}/users/${user.sub}/measurements/${size.id}`, {
          first_name: "data.firstName",
          last_name: "data.lastName",
          phone: "data.phone",
          shipping_address: "data.shippingAddress",
        })
        .then((res) => {
          let copySizeProfiles = sizeProfiles;
          copySizeProfiles.splice(index, 1, res);
          setSizeProfiles(copySizeProfiles);
          setLoading(false);
          setEdit(false);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const handleEdit = () => {
    setEdit(true);
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
      <div hidden={isAdd ? "true" : ""}>
        <Button variant="contained" onClick={() => handleAdd()}>
          +
        </Button>
      </div>
      <div hidden={isAdd ? "" : "true"}>
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
                  <Button variant="contained" onClick={() => handleEdit()}>
                    Edit
                  </Button>
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
