import styled, { css } from "styled-components";
import { ChevronDown } from "@styled-icons/heroicons-solid/ChevronDown";

export const StyledArticle = styled.article`
  margin: 0px 30px;
  @media (max-width: 767px) {
    margin: 0px;
  }
`;
export const Title = styled.h4`
  font-size: 30px;
  margin: 0;
  color: ${({ theme }) => theme.colors.text};
  align-self: center;
  @media (max-width: 767px) {
    font-size: 20px;
  }
`;
export const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  width: calc(100% + 60px);
  padding: 15px 30px;
  margin: 20px -30px;
  @media (max-width: 767px) {
    padding: 5px 30px;
    margin: 10px -30px;
  }
  border: none;
`;
export const ChevronDownStyled = styled(ChevronDown)`
  float: right;
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
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }
  ${(props) =>
    props.hide &&
    css`
      height: 0;
      overflow: hidden;
      transform: scaleY(0);
    `}
`;
export const Icon = styled.img`
  width: 35px;
  height: 35px;
  transform: translateY(5px);
  margin-left: 5px;
  margin: 0;
  @media (max-width: 767px) {
    width: 25px;
    height: 25px;
  }
`;
