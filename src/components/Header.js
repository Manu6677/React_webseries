import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext"

const Header = () => {

  const { loggedIn } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex h-28 bg-pink-100 shadow-lg justify-between mb-3 px-3">
      <div className="w-28 h-24 rounded-md">
        <img className="" src={LOGO_URL} alt="noImg" />
      </div>
      <div className="flex items-center">
        <ul className="flex space-x-3">
          <li>Online status:{onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>{loggedIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
