import styled from "styled-components";

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.text};
  position: absolute;
  width: 100%;
  left: 0;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  list-style: none;
  max-width: calc(1200px - 200px);
  margin: 0 auto;
  padding: 0 50px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.colors.background};
  font-size: 25px;
  padding: 10px;
  font-weight: bold;
  display: flex;
  justify-content: start;
  transition: 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;
