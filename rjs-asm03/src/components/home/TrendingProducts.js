import React, { Fragment } from "react";
import ListProducts from "./ListProducts";
import classes from "./TrendingProducts.module.css";

function TrendingProducts() {
  return (
    <Fragment>
      <div className={classes.title}>
        <p>MADE THE HARD WAY</p>
        <h2>TOP TRENDING PRODUCTS</h2>
      </div>
      <ListProducts />
    </Fragment>
  );
}

export default TrendingProducts;
