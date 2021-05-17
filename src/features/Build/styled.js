import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowCircleRight } from "@styled-icons/heroicons-solid/ArrowCircleRight";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 30px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  padding: 10px;
  margin: 30px;
  margin-left: 0;
  text-align: center;
  &:hover {
    letter-spacing: 3px;
  }
`;

export const ArrowRight = styled(ArrowCircleRight)`
  height: 40px;
`;
