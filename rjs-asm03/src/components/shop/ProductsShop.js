import Products from "../shop/Products";
import React, { Fragment, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import classes from "./ProductsShop.module.css";

const ProductsShop = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/shop/category/all");
  }, []);

  return (
    <Fragment>
      <div className={classes.banner}>
        <span className={classes.large}>SHOP</span>
        <span className={classes.small}>SHOP</span>
      </div>
      <div className={classes.container}>
        <div className={classes.sidebar}>
          <SideBar />
        </div>
        <div className={classes.product}>
          <div className={classes.search}>
            <input type="text" placeholder="Enter Search Here!" />
            <select>
              <option value="">Default sorting</option>
            </select>
          </div>
          <div className={classes.list}>
            <Products category={category} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductsShop;
