import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.sub_banner}>
        <span className={classes.sub_title}>NEW INSPIRATION 2020</span>
        <br />
        <span className={classes.title}>20% OFF ON NEW SEASON</span>
        <br />
        <button className={classes.btn}>
          <NavLink to="/shop">Browse collections</NavLink>
        </button>
      </div>
      <img src="./images/banner1.jpg" alt="banner" width="100%" />
    </div>
  );
};

export default Banner;
