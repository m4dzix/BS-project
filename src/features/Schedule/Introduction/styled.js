import styled from "styled-components";

export const Description = styled.p`
  padding: 20px;
  text-align: justify;
  margin: 10px 10px -20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 5px;
  }
`;
