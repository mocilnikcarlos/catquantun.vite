import dataLinks from "../../helpers/dataNavLinks.json";
import BtnNavbar from "./BtnNavbar";
import "./NavLink.scss";

const NavLink = () => {
  return (
    <nav>
      <ul className="list-links">
        {dataLinks.getNavLink.map((item) => (
          <li key={item.id}>
            <BtnNavbar to={item.to} placeholder={item.target} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLink;
