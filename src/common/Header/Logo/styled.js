import styled from "styled-components";
import { Link } from "react-router-dom";

export const SquareLink = styled(Link)`
  width: 100px;
  height: 100px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  z-index: 2;
  &:hover {
    filter: brightness(1.1);
    cursor: pointer;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    transform: scale(0.8);
    padding: 15px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    display: none;
  }
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.background};
  text-transform: uppercase;
  font-size: 80px;
  text-shadow: 0px 5px 4px ${({ theme }) => theme.colors.text};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    transform: scale(0.8);
  }
`;
