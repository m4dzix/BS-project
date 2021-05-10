import styled from "styled-components";

export const Square = styled.div`
  width: 100px;
  height: 100px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  left: calc(100% - 1800px);
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.background};
  text-transform: uppercase;
  font-size: 80px;
  text-shadow: 0px 5px 4px ${({ theme }) => theme.colors.text};
`;
