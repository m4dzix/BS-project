import styled, { css } from "styled-components";

export const Button = styled.button`
  display: none;
  width: 40px;
  background-color: inherit;
  border: none;
  cursor: pointer;
  z-index: 5;
  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
  ${(props) =>
    props.hide &&
    css`
      position: relative;
    `}
  @media (max-width: 767px) {
    display: block;
  }
`;
