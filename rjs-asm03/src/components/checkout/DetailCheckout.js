import { Fragment } from "react";
import { useSelector } from "react-redux";
import { formatCash } from "../../hooks/formatCash";
import classes from "./DetailCheckout.module.css";

const DetailCheckout = () => {
  useSelector((state) => state.cart.data);
  const productList = JSON.parse(localStorage.getItem("dataProduct")) || [];

  // Tính tổng giá trị đơn hàng
  let total = 0;
  for (let i = 0; i < productList.length; i++) {
    total += productList[i].price * productList[i].quantity;
  }

  return (
    <Fragment>
      <div className={classes.banner}>
        <span className={classes.large}>CHECKOUT</span>
        <span className={classes.small}>
          HOME / CART / <span className={classes.checkout}>CHECKOUT</span>
        </span>
      </div>
      <h3 className={classes.title}>BILLING DETAILS</h3>
      <div className={classes.container}>
        <form className={classes.form}>
          <label>FULL NAME:</label>
          <input type="text" placeholder="Enter Your Full Name Here!" />
          <label>EMAIL:</label>
          <input type="email" placeholder="Enter Your Email Here!" />
          <label>PHONE NUMBER:</label>
          <input type="text" placeholder="Enter Your Phone Number Here!" />
          <label>ADDRESS:</label>
          <input type="text" placeholder="Enter Your Address Here!" />
          <button>Place order</button>
        </form>
        <div className={classes.order}>
          <h3>YOUR ORDER</h3>
          {productList.map((item, index) => (
            <div key={index} className={classes.product}>
              <span className={classes.name}>{item.name}</span>
              <span className={classes.price}>
                {formatCash(item.price)} VND x {item.quantity}
              </span>
            </div>
          ))}
          <div className={classes.total}>
            <p>TOTAL</p>
            <p className={classes.total_price}>{formatCash(total)} VND</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DetailCheckout;
