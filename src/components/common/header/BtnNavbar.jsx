import { Link } from "react-router-dom";
import "./BtnNavbar.scss";

const BtnNavbar = (props) => {
  return (
    <Link to={props.to} className="link-navbar">
      <span className="mask">
        <div className="link-navbar-container">
          <span className="link-scroll-up text-link navlink">
            {props.placeholder}
          </span>
          <span className="link-scroll-down text-link navlink">
            {props.placeholder}
          </span>
        </div>
      </span>
    </Link>
  );
};

export default BtnNavbar;
