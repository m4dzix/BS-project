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
}
a{
  color: inherit;
  text-decoration: none;
  &:hover{
    color: ${({ theme }) => theme.colors.hover};
  }
}
`;
