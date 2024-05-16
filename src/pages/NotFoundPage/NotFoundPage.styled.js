import { Link } from "react-router-dom";
import styled from "styled-components";

export const ImageStyled = styled.img`
  display: block;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  width: 230px;
  object-fit: contain;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
`;

export const TitleStyled = styled.h1`
  text-align: center;
`;

export const LinkStyled = styled(Link)`
  margin-top: 15px;
  display: block;
  font-weight: 700;
  text-align: center;
  text-decoration: underline;
  font-size: 16px;
  transition: var(--transition);

  &:hover,
  &:focus {
    color: #16a085;
  }
`;
