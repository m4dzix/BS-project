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
  align-self: flex-end;
  &:hover {
    filter: brightness(1.5);
    transform: scale(1.1);
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 0px;
  }
`;

export const ArrowRight = styled(ArrowCircleRight)`
  height: 40px;
`;
