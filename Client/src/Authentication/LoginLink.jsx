import { Link } from "react-router-dom";
import UserAPI from "../API/UserAPI";
import Cookies from "js-cookie";
function LoginLink(props) {
  const onRedirect = () => {
    const fetchData = async () => {
      const response = await UserAPI.logout();
      console.log(response);
    };

    fetchData();

    localStorage.removeItem("currentUser");
    Cookies.remove("user");
    window.location.reload();
  };

  return (
    <li className="nav-item" onClick={onRedirect}>
      <Link className="nav-link" to="/signin">
        ( Logout )
      </Link>
    </li>
  );
}

export default LoginLink;
