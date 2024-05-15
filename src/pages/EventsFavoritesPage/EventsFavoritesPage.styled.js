import { Link } from "react-router-dom";
import styled from "styled-components";

export const LinkStyled = styled(Link)`
  display: block;
  margin-top: 20px;
  color: var(--color-text-accent);
  text-decoration: underline;
  transition: var(--transition);

  &:hover,
  &:focus {
    color: #16a085;
  }
`;
