import styled, { css } from "styled-components";
import { ChevronDown } from "@styled-icons/heroicons-solid/ChevronDown";

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
  border-radius: 5px;
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
  background-color: inherit;
  margin: 0;
  padding: 0;
  border: none;
`;
export const ChevronDownStyled = styled(ChevronDown)`
  height: 40px;
  transition: 0.5s;
  ${(props) =>
    props.hide &&
    css`
      transform: rotate(180deg);
    `}
`;
export const Wrapper = styled.div`
  height: auto;
  transform: scaleY(1);
  transform-origin: top;
  transition: transform 0.5s ease;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  @media (max-width: 767px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  }
  ${(props) =>
    props.hide &&
    css`
      height: 0;
      overflow: hidden;
      transform: scaleY(0);
    `}
`;
