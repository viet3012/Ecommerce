import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HIDE_POPUP } from "../../store/popup-slice";
import { formatCash } from "../../hooks/formatCash";
import classes from "./Popup.module.css";

const Modal = (props) => {
  return (
    <main className={classes.modal}>
      <div>
        <img src={props.img1} alt={props.name} width="100%" />
      </div>
      <section>
        <h2>{props.name}</h2>
        <p className={classes.price}>{formatCash(props.price)} VND</p>
        <p className={classes.desc}>{props.short_desc}</p>
        <button
          className={classes.btn}
          onClick={() => {
            props.view(props._id.$oid);
          }}
        >
          <i class="fa-sharp fa-solid fa-cart-shopping"></i>
          View Details
        </button>
      </section>
      <button className={classes.close} onClick={props.close}>
        <i class="fa-solid fa-xmark"></i>
      </button>
    </main>
  );
};

const Popup = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Hàm đóng popup
  const hidePopupHandler = () => {
    dispatch(HIDE_POPUP());
  };
  // Hàm xem chi tiết sản phẩm
  const viewDetailHandler = (id) => {
    navigate(`/detail/${id}`);
    dispatch(HIDE_POPUP(id));
  };
  return (
    <>
      {ReactDOM.createPortal(
        <Modal {...props} close={hidePopupHandler} view={viewDetailHandler} />,
        document.getElementById("modal")
      )}
    </>
  );
};

export default Popup;
