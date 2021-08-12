import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`;
export const Info = styled.p`
  font-size: 18px;
  letter-spacing: 1px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 400;
  margin-bottom: 0px;
  padding: 15px;
`;
