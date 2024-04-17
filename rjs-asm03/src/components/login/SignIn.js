import { useRef } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { ON_LOGIN } from "../../store/auth-slice";
import classes from "./SignIn.module.css";

const SignIn = () => {
  const emailRef = useRef();
  const passRef = useRef();
  const dispatch = useDispatch();

  const userList = JSON.parse(localStorage.getItem("userArr")) || [];

  // Hàm sự kiện click nút sign in
  const signInHandler = (event) => {
    event.preventDefault();
    const user = {
      email: emailRef.current.value,
      pass: passRef.current.value,
    };
    // Kiểm tra thông tin
    const index = userList.findIndex((item) => item.email === user.email);
    if (user.email === "" || user.pass === "") {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    if (index > -1 && userList[index].pass === user.pass) {
      dispatch(ON_LOGIN(userList[index]));
      window.location.replace("/");
    } else {
      alert("Thông tin đăng nhập không chính xác!");
      passRef.current.value = "";
      return;
    }
  };
  return (
    <div className={classes.login}>
      <div className={classes.container}>
        <h3>Sign In</h3>
        <form className={classes.form} onSubmit={signInHandler}>
          <input type="email" placeholder="Email" ref={emailRef}></input>
          <input type="password" placeholder="Password" ref={passRef}></input>
          <button type="submit">SIGN IN</button>
        </form>
        <p>
          Create an account? <NavLink to="/register">Sign up</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
