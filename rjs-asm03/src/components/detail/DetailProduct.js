import { useState, useEffect, Fragment } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useFetch from "../../hooks/useFetch";
import { ADD_CART } from "../../store/cart-slice";
import { formatCash } from "../../hooks/formatCash";
import classes from "./DetailProduct.module.css";

const DetailProduct = () => {
  const [detailProduct, setDetailProduct] = useState([]);
  const [relatedProduct, setRelatedProduct] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const productData = useFetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();

  // Lấy dữ liệu chi tiết sản phẩm
  useEffect(() => {
    const getDetailProduct = () => {
      const detailProduct = productData.filter(
        (item) => item._id.$oid === param.id
      );
      setDetailProduct(detailProduct);
    };
    productData && getDetailProduct();
  }, [productData]);

  //Lấy dữ liệu các sản phẩm liên quan
  useEffect(() => {
    const getRelatedProduct = () => {
      const relatedProduct = productData.filter(
        (items) =>
          items.category === detailProduct[0].category &&
          items._id.$oid !== detailProduct[0]._id.$oid
      );    
      setRelatedProduct(relatedProduct);
    };
    productData && getRelatedProduct();
  }, [detailProduct]);

  //Hàm tăng giảm số lượng sản phẩm
  const incrementHandler = () => {
    setQuantity(quantity + 1);
  };
  const decrementHandler = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  //Hàm thêm sản phẩm vào giỏ hàng
  const addCartHandler = (item) => {
    item = { ...item, quantity: quantity };
    dispatch(ADD_CART({ products: item }));
    navigate("/cart");
  };

  return (
    <Fragment>
      {detailProduct.map((item) => (
        <div>
          <div key={item._id.$oid} className={classes.container}>
            <div className={classes.img}>
              <img src={item.img1} width="100%" alt="img1"></img>
              <img src={item.img2} width="100%" alt="img2"></img>
              <img src={item.img3} width="100%" alt="img3"></img>
              <img src={item.img4} width="100%" alt="img4"></img>
            </div>
            <div className={classes.img_large}>
              <img src={item.img4} alt="img4" width="100%"></img>
            </div>
            <div className={classes.info}>
              <h2 className={classes.name}>{item.name}</h2>
              <p className={classes.price}>{formatCash(item.price)} VND</p>
              <p className={classes.short_desc}>{item.short_desc}</p>
              <p>CATEGORY: {item.category}s</p>
              <div className={classes.addcart}>
                <span className={classes.quantity}>
                  <span>QUANTITY</span>
                  <i
                    onClick={() => decrementHandler()}
                    className={`${"fa-solid fa-caret-left"}`}
                  ></i>
                  {quantity}
                  <i
                    onClick={() => incrementHandler()}
                    className={`${"fa-solid fa-caret-right"}`}
                  ></i>
                </span>
                <button onClick={() => addCartHandler(detailProduct[0])}>
                  Add to cart
                </button>
              </div>
            </div>
          </div>
          <div className={classes.sub_container}>
            <span className={classes.description}>DESCRIPTION</span>
            <h3>PRODUCT DESCRIPTION</h3>
            <span>
              {item.long_desc.split("\n").map((item) => (
                <p className={classes.long_desc}>{item}</p>
              ))}
            </span>
            <h3>RELATED PRODUCTS</h3>
            <div className={classes.related}>
              {relatedProduct.map((item) => (
                <div key={item._id.$oid} className={classes.related_product}>
                  <img src={item.img1} alt="" width="100%" />
                  <p>{item.name}</p>
                  <p>{formatCash(item.price)} VND</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default DetailProduct;
