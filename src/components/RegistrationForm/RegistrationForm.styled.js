import { Link } from "react-router-dom";
import styled from "styled-components";

export const FormStyled = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 1px solid var(--color-text-accent);
  border-radius: 5px;
  padding: 10px;
`;

export const ErrorMessage = styled.div`
  font-family: inherit;
  color: ${(props) => props.color || "#dc3b5a"};
  margin-top: 5px;
  margin-bottom: 10px;
  line-height: 1.17;
  font-size: 14px;
`;

export const InputStyled = styled.input`
  font-family: inherit;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.17;

  border: 1px solid
    ${(props) =>
      props.$error ? "#dc3b5a" : props.$success ? "#3CBF61" : "#1e1e1e"};

  border-radius: 8px;
  padding: 10px 16px;
  width: 168px;
  height: 48px;
  background: none;
  color: inherit;
  outline: none;
  &:focus {
    border: 1px solid #1e1e1e;
  }
  &::placeholder {
    color: black;
  }
  @media (min-width: 768px) {
    width: 200px;
  }
  @media (min-width: 1280px) {
    width: 333px;
    height: 64px;
    &::placeholder {
      font-size: 16px;
      line-height: 1.19;
    }
  }
`;

export const BoxStyled = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const LinkStyled = styled(Link)`
  display: inline-block;
  margin-top: 44px;
  border-radius: 12px;
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

export const ButtonStyled = styled.button`
  display: block;
  border: none;
  margin-top: 44px;
  border-radius: 12px;
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
