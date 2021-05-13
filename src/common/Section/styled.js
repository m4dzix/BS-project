import styled from "styled-components";

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-top: 30px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.text};
  padding: 30px;
  text-transform: capitalize;
`;
