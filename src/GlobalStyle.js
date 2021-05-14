import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  font-family: "Lato", sans-serif;

}
*, ::after, ::before {
  box-sizing: inherit;
}
body {
  margin: 0;
  padding: 0;
    background-color: ${({ theme }) => theme.colors.background};
}
a{
  color: inherit;
  text-decoration: none;
  transition:0.3s;
  &:hover{
    color: ${({ theme }) => theme.colors.hover};
  }
}
`;
