import { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { REMOVE_CART, UPDATE_CART } from "../../store/cart-slice";
import { formatCash } from "../../hooks/formatCash";
import classes from "./ShoppingCart.module.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  useSelector((state) => state.cart.data);
  const productList = JSON.parse(localStorage.getItem("dataProduct")) || [];

  // Tính tổng giá trị đơn hàng
  let total = 0;
  for (let i = 0; i < productList.length; i++) {
    total += productList[i].price * productList[i].quantity;
  }

  // Hàm xoá sản phẩm
  const removeCartHandler = (index) => {
    productList.splice(index, 1);
    dispatch(REMOVE_CART({ products: productList }));
  };

  // Hàm giảm số lượng sản phẩm
  const decrementHandler = (index) => {
    let updatedProduct = productList.map((item, i) => {
      if (i === index && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    dispatch(UPDATE_CART({ products: updatedProduct }));
  };

  // Hàm tăng số lượng sản phẩm
  const incrementHandler = (index) => {
    let updatedProduct = productList.map((item, i) => {
      if (i === index) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    dispatch(UPDATE_CART({ products: updatedProduct }));
  };

  return (
    <Fragment>
      <div className={classes.banner}>
        <span className={classes.large}>CART</span>
        <span className={classes.small}>CART</span>
      </div>
      <h3 className={classes.title}>SHOPPING CART</h3>
      <div className={classes.container}>
        <div>
          <table>
            <thead>
              <tr>
                <th width="115px">IMAGE</th>
                <th width="230px">PRODUCT</th>
                <th width="115px">PRICE</th>
                <th width="140px">QUANTITY</th>
                <th width="115px">TOTAL</th>
                <th width="115px">REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((item, index) => (
                <tr key={item._id.$oid}>
                  <td>
                    <img
                      src={item.img1}
                      width="100%"
                      alt="product"
                      className={classes.img}
                    />
                  </td>
                  <td className={classes.name}>{item.name}</td>
                  <td className={classes.price}>
                    {formatCash(item.price)} VND
                  </td>
                  <td>
                    <span onClick={() => decrementHandler(index)}>
                      <i
                        className={`${"fa-solid fa-caret-left"}  ${
                          classes.arrow
                        }`}
                      ></i>
                    </span>
                    {item.quantity}
                    <span onClick={() => incrementHandler(index)}>
                      <i
                        className={`${"fa-solid fa-caret-right"}  ${
                          classes.arrow
                        }`}
                      ></i>
                    </span>
                  </td>
                  <td className={classes.price}>
                    {formatCash(item.price * item.quantity)} VND
                  </td>
                  <td>
                    <i
                      className={`${"fa fa-trash-can"}  ${classes.remove}`}
                      onClick={() => removeCartHandler(index)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className={classes.btn}>
            <NavLink to="/shop">
              <button className={classes.btnshop}>
                <i className="fa fa-long-arrow-left"></i> Continue Shopping
              </button>
            </NavLink>
            <NavLink to="/checkout">
              <button>
                Proceed to checkout <i className="fa fa-long-arrow-right"></i>
              </button>
            </NavLink>
          </div>
        </div>
        <div className={classes.cart_total}>
          <h3>CART TOTAL</h3>
          <div className={classes.subtotal}>
            <p>SUBTOTAL</p>
            <p>{formatCash(total)} VND</p>
          </div>
          <div className={classes.total}>
            <p>TOTAL</p>
            <p>{formatCash(total)} VND</p>
          </div>
          <input type="text" placeholder="Enter your coupon" />
          <br />
          <button>
            <i className="fa fa-gift"></i> Apply coupon
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default ShoppingCart;
