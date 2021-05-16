import styled from "styled-components";

export const Button = styled.button`
  display: none;
  width: 60px;
  height: 60px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 2;
  @media (max-width: 767px) {
    display: flex;
  }
`;
