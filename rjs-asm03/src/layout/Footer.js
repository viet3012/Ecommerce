import classes from "./Footer.module.css";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className={classes.footer}>
      <ul>
        <h3>CUSTOMER SERVICES</h3>
        <li>
          <NavLink to="#">Help & Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="#">Returns & Refunds</NavLink>
        </li>
        <li>
          <NavLink to="#">Online Stores</NavLink>
        </li>
        <li>
          <NavLink to="#">Term & Conditions</NavLink>
        </li>
      </ul>
      <ul>
        <h3>COMPANY</h3>
        <li>
          <NavLink to="#">What We Do</NavLink>
        </li>
        <li>
          <NavLink to="#">Available Services</NavLink>
        </li>
        <li>
          <NavLink to="#">Latest Posts</NavLink>
        </li>
        <li>
          <NavLink to="#">FAQs</NavLink>
        </li>
      </ul>
      <ul>
        <h3>SOCIAL MEDIA</h3>
        <li>
          <NavLink to="#">Twitter</NavLink>
        </li>
        <li>
          <NavLink to="#">Instagram</NavLink>
        </li>
        <li>
          <NavLink to="#">Facebook</NavLink>
        </li>
        <li>
          <NavLink to="#">Pinterest</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
