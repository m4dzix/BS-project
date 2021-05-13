import styled from "styled-components";

export const Title = styled.h1`
  font-size: 50px;
  max-width: 1200px;
  margin: 0 auto;
  font-weight: bold;
  padding: 10px 150px;
  color: ${({ theme }) => theme.colors.text};
`;
