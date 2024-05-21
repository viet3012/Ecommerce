import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserAPI from "../API/UserAPI";
import Cookies from "js-cookie";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorBlank, setErrorBlank] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const navigate = useNavigate();
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = () => {
    if (email === "" || password === "") {
      setErrorBlank(true);
      setErrorPassword(false);
      return;
    }
    const fetchData = async () => {
      const users = {
        email: email,
        password: password,
      };
      const res = await UserAPI.postSignIn(users);
      if (res === "false") {
        setErrorBlank(false);
        setErrorPassword(true);
        return;
      } else {
        navigate("/");
      }

      Cookies.set("user", res.fullname, { expires: 1 });

      localStorage.setItem("currentUser", JSON.stringify(res));

      window.location.reload();
    };

    fetchData();
  };

  return (
    <div className="page-wrapper">
      <div className="page-breadcrumb">
        <div>
          <div class="login">
            <div class="heading">
              <h2>Sign in</h2>
              <div className="d-flex justify-content-center pb-5">
                {errorBlank && (
                  <span className="text-danger">
                    Vui lòng nhập đủ thông tin
                  </span>
                )}
                {errorPassword && (
                  <span className="text-danger">Sai email hoặc mật khẩu</span>
                )}
              </div>
              <form action="#">
                <div className="input-group input-group-lg">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    value={email}
                    onChange={onChangeEmail}
                  />
                </div>

                <div className="input-group input-group-lg">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    value={password}
                    onChange={onChangePassword}
                  />
                </div>

                <button type="button" className="float" onClick={handleSubmit}>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
