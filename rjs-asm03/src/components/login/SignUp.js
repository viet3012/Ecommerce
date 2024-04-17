import { useRef } from "react";
import { NavLink } from "react-router-dom";
import classes from "./SignUp.module.css";

const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passRef = useRef();
  const phoneRef = useRef();
  const userList = JSON.parse(localStorage.getItem("userArr")) || [];

  // Hàm sự kiện click nút sign up
  const signUpHandler = (event) => {
    event.preventDefault();
    const user = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      pass: passRef.current.value,
      phone: phoneRef.current.value,
    };

    // Kiểm tra các điều kiện
    if (
      user.name === "" ||
      user.email === "" ||
      user.pass === "" ||
      user.phone === ""
    ) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    if (userList.findIndex((item) => item.email === user.email) > -1) {
      alert("Email đã được sử dụng!");
      return;
    }
    if (user.pass.length < 8) {
      alert("Password phải trên 8 kí tự!");
      return;
    }
    // Nếu hợp lệ thì lưu vào mảng và về page login
    userList.push(user);
    localStorage.setItem("userArr", JSON.stringify(userList));
    window.location.replace("/login");
  };

  return (
    <div className={classes.register}>
      <div className={classes.container}>
        <h3>Sign Up</h3>
        <form className={classes.form} onSubmit={signUpHandler}>
          <input type="text" placeholder="Full Name" ref={nameRef} />
          <input type="email" placeholder="Email" ref={emailRef} />
          <input type="password" placeholder="Password" ref={passRef} />
          <input type="text" placeholder="Phone" ref={phoneRef}></input>
          <button type="submit">SIGN UP</button>
        </form>
        <p>
          Login? <NavLink to="/login">Click</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
