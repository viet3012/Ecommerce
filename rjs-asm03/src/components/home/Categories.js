import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import classes from "./Categories.module.css";

const Categories = () => {
  return (
    <Fragment>
      <div className={classes.title}>
        <p>CAREFULLY CREATED COLLECTIONS</p>
        <h2>BROWSE OUR CATEGORIES</h2>
      </div>
      <div className={classes.top}>
        <NavLink to="/shop">
          <img src="/images/product_1.png" alt="iphone" width="100%" />
        </NavLink>
        <NavLink to="/shop">
          <img src="/images/product_2.png" alt="mac" width="100%" />
        </NavLink>
      </div>
      <div className={classes.bottom}>
        <NavLink to="/shop">
          <img src="/images/product_3.png" alt="ipad" width="100%" />
        </NavLink>
        <NavLink to="/shop">
          <img src="/images/product_4.png" alt="watch" width="100%" />
        </NavLink>
        <NavLink to="/shop">
          <img src="/images/product_5.png" alt="airpods" width="100%" />
        </NavLink>
      </div>
    </Fragment>
  );
};

export default Categories;
