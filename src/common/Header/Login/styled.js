import styled from "styled-components";
import { User } from "@styled-icons/heroicons-outline/User";

export const LoginStyled = styled.button`
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  right: 0px;
  padding: 10px;
  border: none;
  background-color: inherit;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
  @media (max-width: 767px) {
    right: 50px;
    top: 20px;
    height: 50px;
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
export const UserIcon = styled(User)`
  width: 30px;
  margin-top: -8px;
`;
