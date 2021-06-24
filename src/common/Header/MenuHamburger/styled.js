import styled, { css } from "styled-components";

export const Button = styled.button`
  display: none;
  width: 60px;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  justify-content: center;
  align-items: center;
  position: fixed;
  right: 10px;
  top: 10px;
  z-index: 2;
  ${(props) =>
    props.hide &&
    css`
      position: absolute;
    `}
  @media (max-width: 767px) {
    display: flex;
  }
`;
