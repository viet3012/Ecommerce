import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ON_LOGOUT, ON_LOGIN } from "../store/auth-slice";
import classes from "./Navbar.module.css";

const Navbar = () => {
  let currentUser = JSON.parse(localStorage.getItem("user")) || [];
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Kiểm tra có người dùng đăng nhập chưa
  useEffect(() => {
    if (currentUser.name) {
      dispatch(ON_LOGIN(currentUser));
    }
  });
  // Hàm điều hướng chuyển đến các trang
  const pageNavigate = (item) => {
    navigate("/" + item);
  };
  // Hàm logout để đăng xuất
  const logoutHandler = () => {
    dispatch(ON_LOGOUT());
    pageNavigate("");
  };

  return (
    <header className={classes.navbar}>
      <nav>
        <button onClick={() => pageNavigate("")} className={classes.home}>
          Home
        </button>
        <button onClick={() => pageNavigate("shop")}>Shop</button>
      </nav>
      <nav>
        <span className={classes.logo}>BOUTIQUE</span>
      </nav>
      <nav>
        <button onClick={() => pageNavigate("cart")}>
          <i class="fa-solid fa-cart-flatbed"></i>Cart
        </button>
        {!isLogin ? (
          <button onClick={() => pageNavigate("login")}>
            <i class="fa-solid fa-user"></i>Login
          </button>
        ) : (
          <button>
            <i class="fa-solid fa-user"></i>
            <span onClick={logoutHandler}>
              {currentUser.name + " (Logout)"}
            </span>
          </button>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
