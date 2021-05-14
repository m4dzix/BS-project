import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  padding: 20px;
  margin: 30px;
  margin-left: 0;
`;
