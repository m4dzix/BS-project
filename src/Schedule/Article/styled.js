import styled from "styled-components";

export const StyledArticle = styled.article`
  display: grid;
  grid-gap: 20px;
  margin: 30px 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;
export const Title = styled.h4`
  grid-column-start: 1;
  grid-column-end: -1;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.text};
  background-color: ${({ theme }) => theme.colors.mainColor};
  width: calc(100% + 60px);
  padding: 15px 30px;
  margin: 20px -30px;
`;
