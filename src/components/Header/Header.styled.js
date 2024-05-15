import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  background-color: var(--bg-secondary);
  width: 100%;
  height: 80px;
  z-index: 2;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3),
    -23px 0 20px -23px rgba(0, 0, 0, 0.6), 23px 0 20px -23px rgba(0, 0, 0, 0.6),
    inset 0 0 40px rgba(0, 0, 0, 0.1);
`;

export const NavBox = styled.nav`
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: space-between;
`;

export const ImageStyled = styled.img`
  width: 100px;
  height: 100px;
`;

export const LinkStyled = styled(NavLink)`
  font-weight: 400;
  line-height: 1.43;
  color: #fff;

  transition: var(--transition);

  &.active {
    color: var(--bg-color-accent);
  }

  &:hover {
    color: #16a085;
  }
  &:focus {
    color: var(--bg-color-accent);
  }

  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
