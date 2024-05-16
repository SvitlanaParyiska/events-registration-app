import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const BackdropBurgerMenu = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 4999;
  background-color: rgba(4, 4, 4, 0.4);
`;

export const ContainerBurgerMenu = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  margin-left: auto;
  padding: 20px;
  width: 50%;
  height: 100%;
  z-index: 120;
  background-color: var(--bg-secondary);

  @media (min-width: 769px) and (max-width: 1440px) {
    padding: 26px 32px 32px 32px;
  }
`;

export const IconStyled = styled.div`
  text-align: end;
`;
export const NavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 35px;
  align-items: center;
  transform: translateY(100%);
`;

export const BurgerMenuNavLinkStyled = styled(NavLink)`
  border: 1px solid transparent;
  display: inline-block;
  font-weight: 400;
  line-height: 1.43;
  color: #fff;
  padding: 9px 9px;
  border-radius: 30px;
  font-size: 16px;
  transition: var(--transition);

  &:hover,
  &:focus {
    border: 1px solid #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &.active {
    border: 1px solid #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 9px 26px;
  }
`;

export const BurgerMenuModalStyled = styled.button`
  display: inline-block;
  background-color: transparent;
  border: 1px solid transparent;
  font-weight: 400;
  line-height: 1.43;
  color: #fff;
  padding: 9px 9px;
  border-radius: 30px;
  font-size: 16px;
  transition: var(--transition);

  &:hover,
  &:focus {
    border: 1px solid #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    padding: 9px 26px;
  }
`;
