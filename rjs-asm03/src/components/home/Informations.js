import { Fragment } from "react";
import classes from "./Informations.module.css";

const Informations = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.item}>
          <h3>FREE SHIPPING</h3>
          <p>Free shipping worldwide</p>
        </div>
        <div className={classes.item}>
          <h3>24 X 7 SERVICE</h3>
          <p>Free shipping worldwide</p>
        </div>
        <div className={classes.item}>
          <h3>FESTIVAL OFFER</h3>
          <p>Free shipping worldwide</p>
        </div>
      </div>
      <div className={classes.sub_container}>
        <div className={classes.item}>
          <h3>LET'S BE FRIENDS!</h3>
          <p>Nisi nisi tempor consequat laboris nisi</p>
        </div>
        <div className={classes.contact}>
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </Fragment>
  );
};

export default Informations;
