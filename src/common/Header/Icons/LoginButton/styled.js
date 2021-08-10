import styled from "styled-components";

export const LoginStyled = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: none;
  background-color: inherit;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;
export const Text = styled.p`
  font-size: 25px;
  letter-spacing: 1px;
  margin-right: 5px;
  @media (max-width: 767px) {
    display: none;
  }
`;
export const UserIcon = styled.div`
  width: 30px;
`;
