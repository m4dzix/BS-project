import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.text};
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  list-style: none;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.background};
  font-size: 25px;
  padding: 10px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
