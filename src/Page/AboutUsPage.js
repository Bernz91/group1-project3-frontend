import React from "react";
import "../CSS/AboutUs.css";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import Avatar from "@mui/material/Avatar";

const AboutUs = () => {
  return (
    <Grid2 container columSpacing={0} rowSpacing={0} className="main">
      <Grid2 xs={12}>
        <header className="aboutUsHeader">About Us</header>
        <br />
        <p align="middle">
          We are the team behind {<br />}this (self-proclaimed) awesome app.
        </p>
      </Grid2>
      <Grid2 xs={6} className="avatarGrid">
        <div align="right">
          <Avatar
            src="https://ca.slack-edge.com/TNYFQH8G5-U03F83TDRPD-addd2142c984-512"
            alt="Xue Wei"
            sx={{ width: 150, height: 150 }}
          />
        </div>
      </Grid2>
      <Grid2 xs={6} className="name">
        Xue Wei
      </Grid2>
      <Grid2 xs={6} className="name">
        Zi Hao
      </Grid2>
      <Grid2 xs={6} className="avatarGrid">
        <div align="left">
          <Avatar
            src="https://ca.slack-edge.com/TNYFQH8G5-U036410KFN0-d924c8f960a5-512"
            alt="Zi Hao"
            sx={{ width: 150, height: 150 }}
          />
        </div>
        <br />
      </Grid2>
      <Grid2 xs={6} className="avatarGrid">
        <div align="right">
          <Avatar
            src="https://ca.slack-edge.com/TNYFQH8G5-U02LQ9L86TS-5fe8b2d03a14-512"
            alt="Samuel"
            sx={{ width: 150, height: 150 }}
          />
        </div>
      </Grid2>
      <Grid2 xs={6} className="name">
        Samuel
      </Grid2>
      <Grid2 xs={12}>
        <br />
        <div align="middle">
          <p className="aboutUsDescription">
            We are a group of students from Rocket Academy PTBC4 and this
            website is our project 3 submission. Disclosure: Some of the content
            in this project is taken from external sources and they are not
            intended for commercial purposes.
          </p>
        </div>
      </Grid2>
      <Grid2 xs={12}></Grid2>
    </Grid2>
  );
};

export default AboutUs;
