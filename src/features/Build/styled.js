import styled from "styled-components";
import { Link } from "react-router-dom";
import { ArrowCircleRight } from "@styled-icons/heroicons-solid/ArrowCircleRight";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  background-color: ${({ theme }) => theme.colors.text};
  padding: 5px;
  margin: 0px;
  margin-right: 40px;
  text-align: center;
  border-radius: 5px;
  width: 300px;
  align-self: end;
  &:hover {
    filter: brightness(1.5);
    transform: scale(1.1);
  }
`;

export const ArrowRight = styled(ArrowCircleRight)`
  height: 40px;
`;
