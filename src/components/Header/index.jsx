import { NavLink, useLocation } from "react-router-dom";
import Logo from "/images/images.png";
import { HeaderStyled, ImageStyled, LinkStyled, NavBox } from "./Header.styled";

const Header = () => {
  const currentUrl = useLocation();

  return (
    <HeaderStyled>
      <div className="header-container">
        <NavBox>
          <NavLink to="/">
            <ImageStyled src={Logo} alt="logo" />
          </NavLink>
          <LinkStyled
            to="/"
            className={currentUrl.pathname === "/" && "active"}
          >
            Home
          </LinkStyled>
          <LinkStyled
            to="/events"
            className={currentUrl.pathname === "/events" && "active"}
          >
            Events
          </LinkStyled>
          <LinkStyled
            to="/favorites"
            className={currentUrl.pathname === "/favorites" && "active"}
          >
            Favorites events
          </LinkStyled>
        </NavBox>
      </div>
    </HeaderStyled>
  );
};

export default Header;
