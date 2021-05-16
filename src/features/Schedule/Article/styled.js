import styled from "styled-components";

export const StyledArticle = styled.article`
  margin: 0px 30px;
  @media (max-width: 767px) {
    margin: 0px;
  }
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
  @media (max-width: 767px) {
    font-size: 25px;
  }
`;
export const Button = styled.button`
  float: right;
`;
export const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  transition: 0.3s;
  @media (max-width: 350px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;
