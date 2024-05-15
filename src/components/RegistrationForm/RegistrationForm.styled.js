import styled from "styled-components";

export const ErrorMessage = styled.div`
  font-family: inherit;
  color: ${(props) => props.color || "#dc3b5a"};
  margin-top: 4px;
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
  /* background-color: var(--color-background) !important; */
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
