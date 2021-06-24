import styled from "styled-components";

export const Button = styled.button`
  display: none;
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  position: absolute;
  right: 10px;
  top: 20px;
  z-index: 2;
  @media (max-width: 767px) {
    display: flex;
  }
`;
