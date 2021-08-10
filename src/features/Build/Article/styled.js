import styled, { css } from "styled-components";

export const StyledArticle = styled.article`
  display: grid;
  grid-gap: 0 20px;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  margin: 20px;
  padding: 20px;
  align-items: end;
  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    margin: 15px 0;
    padding: 0px;
  }
`;
export const Text = styled.p`
  line-height: 1.5;
  letter-spacing: 1.2;
  margin-bottom: 100px;
  grid-column-end: 4;
  grid-column-start: 2;
  grid-row-end: 2;
  grid-row-start: 1;
  margin: 10px;
  ${(props) =>
    props.second &&
    css`
      grid-column-end: 4;
      grid-column-start: 1;
      grid-row-end: 2;
      grid-row-start: 1;
    `}
  @media (max-width: 767px) {
    grid-column-end: 3;
    grid-column-start: 1;
    grid-row-start: 1;
    text-align: justify;
    padding: 10px;
  }
`;
export const Image = styled.div`
  background: linear-gradient(white, transparent), url(${(props) => props.foto});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 250px;
  border-radius: 5px;
`;
