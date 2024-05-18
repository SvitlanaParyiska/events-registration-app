import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  display: inline-block;
  border-radius: 5px;
  padding: 12px 20px;
  background-color: #45b39d;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.43;
  color: #fff;
  transition: var(--transition);

  &:hover,
  &:focus {
    background-color: #16a085;
  }
`;

export const DivStyled = styled.div`
  position: absolute;
  background-color: #ec7063;
  border: 10px;
  padding: 5px;
  p {
    font-size: 14px;
    font-weight: 700;
  }
`;

export const BoxStyled = styled.div`
  max-width: 150px;
  position: absolute;
  text-align: center;
  right: 0;
  background-color: #45b39d;
  border: 10px;
  padding: 5px;

  p {
    font-size: 14px;
    font-weight: 700;
  }
`;
