import styled from "styled-components";

export const BoxStyled = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

export const ButtonStyled = styled.button`
  display: block;
  border: none;
  border-radius: 5px;
  padding: 12px 50px;
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
