import Logo from "../../assets/svg/Logo";
import NavLink from "./NavLink";

import "./Header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="box-header margin-header">
        <Link to="/">
          <Logo className="logo" />
        </Link>
        <NavLink />
      </div>
    </header>
  );
};

export default Header;
