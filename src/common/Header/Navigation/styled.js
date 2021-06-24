import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

const activeClassName = "active";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.text};
  width: 100%;
  position: absolute;
  left: 0;
  z-index: 1;
  @media (max-width: 1200px) {
    padding-left: 100px;
    position: relative;
  }
  @media (max-width: 767px) {
    width: 300px;
    height: 100%;
    left: auto;
    right: 0;
    top: 0;
    transition: 0.5s;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 80px 0px 40px;
    z-index: 1;
    position: fixed;
    ${(props) =>
      props.hide &&
      css`
        right: -300px;
      `}
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  list-style: none;
  max-width: calc(1200px - 200px);
  margin: 0 auto;
  padding: 0 50px;
  @media (max-width: 1200px) {
    margin: 0;
  }
  @media (max-width: 767px) {
    grid-template-columns: none;
    grid-gap: 10px;
    padding: 0 20px;
  }
`;

export const StyledNavLink = styled(NavLink).attrs(() => ({
  activeClassName,
}))`
  color: ${({ theme }) => theme.colors.background};

  font-size: 25px;
  padding: 10px;
  font-weight: bold;
  display: flex;
  justify-content: start;
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.background};
  }
  &.${activeClassName} {
    color: ${({ theme }) => theme.colors.mainColor};
  }
  @media (max-width: 767px) {
    font-size: 18px;
    color: ${({ theme }) => theme.colors.text};
    font-size: 30px;
    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
    &.${activeClassName} {
      color: ${({ theme }) => theme.colors.hover};
      border-left: 10px solid ${({ theme }) => theme.colors.mainColor};
      &:hover {
        color: ${({ theme }) => theme.colors.text};
      }
    }
  }
`;
