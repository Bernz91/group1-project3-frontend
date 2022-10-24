import React from "react";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;

const DeleteButton = (props) => {
  const handleDeleteButtonClick = async () => {
    console.log(props);
    try {
      await axios.delete(
        `${BACKEND_URL}/users/${props.user.sub}/measurements/${props.size.id}`
      );

      const allMeasurement = await axios
        .get(`${BACKEND_URL}/users/${props.user.sub}/measurements`)
        .then((res) => res.data)
        .then((res) => {
          console.log(res);
          props.onDeleteClicked(res);
        });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <CloseIcon
      onClick={() => {
        handleDeleteButtonClick();
      }}
    />
  );
};

export default DeleteButton;
