import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div className={classes.sidebar}>
      <h3>CATEGORIES</h3>
      <ul>
        <h4>APPLE</h4>
        <li>
          <NavLink
            to="/shop/category/all"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            All
          </NavLink>
        </li>
      </ul>
      <ul>
        <h5>IPHONE & MAC</h5>
        <li>
          <NavLink
            to="/shop/category/iphone"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Iphone
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop/category/ipad"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Ipad
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop/category/macbook"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Macbook
          </NavLink>
        </li>
      </ul>
      <ul>
        <h5>WIRELESS</h5>
        <li>
          <NavLink
            to="/shop/category/airpod"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Airpod
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop/category/watch"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Watch
          </NavLink>
        </li>
      </ul>
      <ul>
        <h5>OTHER</h5>
        <li>
          <NavLink
            to="/shop/category/mouse"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Mouse
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop/category/keyboard"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Keyboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop/category/other"
            className={({ isActive }) => (isActive ? classes.active : "")}
          >
            Other
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
