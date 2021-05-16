import styled from "styled-components";

export const Button = styled.button`
  display: none;
  width: 60px;
  height: 60px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  justify-content: center;
  align-items: center;
  position: relative;
  float: right;
  z-index: 1;
  @media (max-width: 767px) {
    display: flex;
  }
`;
