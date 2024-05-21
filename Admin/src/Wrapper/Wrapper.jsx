import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Cookies from "js-cookie";
import UserAPI from "../API/UserAPI";
import "./wrapper.css";

const Wrapper = (props) => {
  const navigate = useNavigate();
  const user = localStorage.getItem("currentUser");
  if (user === null) {
    window.location.replace("/login");
  }

  const handleLogout = () => {
    const fetchData = async () => {
      await UserAPI.logout();
    };
    fetchData();
    localStorage.removeItem("currentUser");
    Cookies.remove("user");
    navigate("/login");
  };

  return (
    <section className="py-2 app__container">
      <section className="row d-flex">
        <div className="col-2 border-secondary border-end border-bottom p-1 text-center fw-bold">
          <span className="title">Admin Page</span>
        </div>
        <div className="col-10 border-secondary border-start border-bottom"></div>
      </section>
      <section className="row d-flex h-90">
        <div className="col-2 border-secondary border-end border-top  side">
          <section className="sidebar__container">
            <section className="sidebar__wrapper">
              <section className="sidebar__list mt-2">
                <ul>
                  <li className="py-1">
                    {/* MAIN - START */}
                    <span>MAIN</span>
                    <ul>
                      <li>
                        <NavLink className="sidebar_link" to="/">
                          <span>Dashboard</span>
                        </NavLink>
                      </li>
                    </ul>
                    {/* MAIN - END */}
                  </li>
                  <li className="py-1">
                    {/* LISTS - START */}
                    <span>LISTS</span>
                    <ul>
                      <li>
                        <NavLink className="sidebar_link" to="/products">
                          <span>Products</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="sidebar_link" to="/new">
                          <span>New Product</span>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className="sidebar_link" to="#">
                          <span>History</span>
                        </NavLink>
                      </li>
                    </ul>
                    {/* LISTS - END */}
                  </li>
                  <li className="py-1">
                    {/* USER - START */}
                    <span>USER</span>
                    <ul>
                      <li onClick={handleLogout}>
                        <NavLink className="sidebar_link pointer">
                          <span>Logout</span>
                        </NavLink>
                      </li>
                    </ul>
                    {/* USER - END */}
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </div>
        <div className="col-10 border-secondary border-start border-top main">
          {props.children}
        </div>
      </section>
    </section>
  );
};

export default Wrapper;
