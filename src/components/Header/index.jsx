// import { useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";

const Header = () => {
  // const currentUrl = useLocation();

  return (
    <div>
      <nav>
        <NavLink to="/">Logo</NavLink>
        <NavLink to="/events">Events</NavLink>
        <NavLink to="/participants">participant</NavLink>
        <NavLink to="/registration">registration</NavLink>
        <NavLink to="/favorites">favorites</NavLink>
      </nav>
    </div>
  );
};

export default Header;
