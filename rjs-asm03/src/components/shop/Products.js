import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { formatCash } from "../../hooks/formatCash";
import { HIDE_POPUP } from "../../store/popup-slice";
import classes from "./Products.module.css";

const Products = ({ category }) => {
  const [filteredProduct, setFilteredProduct] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Hàm xem chi tiết sản phẩm
  const viewDetailHandler = (id) => {
    navigate(id);
    dispatch(HIDE_POPUP(id));
  };
  
  //Lấy dữ liệu sản phẩm API
  const productData = useFetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );

  // Lấy sản phẩm phân theo category
  const getFilteredProduct = (category) => {
    if (category !== "all") {
      const filteredProduct = productData.filter(
        (item) => item.category === category
      );
      setFilteredProduct(filteredProduct);
    } else {
      setFilteredProduct(productData);
    }
  };
  useEffect(() => {
    productData && getFilteredProduct(category);
  }, [category, productData]);

  return (
    <div>
      <div className={classes.list}>
        {filteredProduct.map((item) => (
          <div
            key={item._id.$oid}
            className={classes.product}
            onClick={() => {
              viewDetailHandler(`/detail/${item._id.$oid}`);
            }}
          >
            <img src={item.img1} className={classes.img} width="100%" />
            <p className={classes.name}>{item.name}</p>
            <p className={classes.price}>{formatCash(item.price)} VND</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
