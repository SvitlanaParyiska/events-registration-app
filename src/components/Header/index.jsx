import { NavLink, useLocation } from "react-router-dom";
import Logo from "/images/images.png";
import { HeaderStyled, ImageStyled, LinkStyled, NavBox } from "./Header.styled";
import MediaQuery from "react-responsive";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import BurgerMenu from "../../components/BurgerMenu";

const Header = () => {
  const currentUrl = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <HeaderStyled>
      <div className="header-container">
        <NavBox>
          <NavLink to="/">
            <ImageStyled src={Logo} alt="logo" />
          </NavLink>

          <MediaQuery minWidth={768}>
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
          </MediaQuery>

          <MediaQuery maxWidth={767}>
            <IconButton aria-label="close button" onClick={toggleMenu}>
              <MenuIcon />
            </IconButton>
          </MediaQuery>
          <MediaQuery maxWidth={767}>
            {isMenuOpen && <BurgerMenu onClick={toggleMenu} />}
          </MediaQuery>
        </NavBox>
      </div>
    </HeaderStyled>
  );
};

export default Header;
