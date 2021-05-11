import styled from "styled-components";

export const Subheader = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.text};
  padding: 10px;
  text-transform: capitalize;
`;
