import { useEffect } from "react";
import PropTypes from "prop-types";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import {
  BackdropBurgerMenu,
  BurgerMenuNavLinkStyled,
  ContainerBurgerMenu,
  IconStyled,
  NavListStyled,
} from "./BurgerMenu.styled";
import { useLocation } from "react-router-dom";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

const BurgerMenu = ({ onClick }) => {
  BurgerMenu.propTypes = {
    onClick: PropTypes.func,
  };

  const currentUrl = useLocation();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClick();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClick]);

  const handleCloseClick = () => {
    onClick();
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClick();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return createPortal(
    <BackdropBurgerMenu onClick={handleBackdropClick}>
      <ContainerBurgerMenu>
        <IconStyled>
          <IconButton aria-label="close button" onClick={handleCloseClick}>
            <CloseIcon />
          </IconButton>
        </IconStyled>

        <div>
          <NavListStyled>
            <li>
              <BurgerMenuNavLinkStyled
                to="/"
                aria-label="Link to Home page"
                className={currentUrl.pathname === "/" && "active"}
              >
                Home
              </BurgerMenuNavLinkStyled>
            </li>
            <li>
              <BurgerMenuNavLinkStyled
                to="/events"
                aria-label="Link to Events page"
                className={currentUrl.pathname === "/events" && "active"}
              >
                Events
              </BurgerMenuNavLinkStyled>
            </li>
            <li>
              <BurgerMenuNavLinkStyled
                to="/favorites"
                aria-label="Link to Events page"
                className={currentUrl.pathname === "/favorites" && "active"}
              >
                Favorites
              </BurgerMenuNavLinkStyled>
            </li>
          </NavListStyled>
        </div>
      </ContainerBurgerMenu>
    </BackdropBurgerMenu>,
    modalRoot
  );
};

export default BurgerMenu;
