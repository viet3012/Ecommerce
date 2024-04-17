import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { SHOW_POPUP } from "../../store/popup-slice";
import { formatCash } from "../../hooks/formatCash";
import classes from "./ListProducts.module.css";

const ListProducts = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const productData = useFetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );

  // Lấy dữ liệu sản phẩm
  useEffect(() => {
    const getData = () => {
      setData(productData);
    };
    productData && getData();
  }, [productData]);

  // Hàm hiển thị popup sản phẩm
  const showPopupHandler = (product) => {
    dispatch(SHOW_POPUP(product));
  };

  return (
    <div className={classes.list}>
      {data.map((item) => (
        <>
          <div
            key={item._id.$oid}
            className={classes.product}
            onClick={() => {
              showPopupHandler(item);
            }}
          >
            <img src={item.img1} className={classes.img} width="100%" />
            <p className={classes.name}>{item.name}</p>
            <p className={classes.price}>{formatCash(item.price)} VND</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default ListProducts;
