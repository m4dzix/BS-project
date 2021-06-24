import styled, { css } from "styled-components";

export const Overlay = styled.div`
  display: none;
  ${(props) =>
    props.show &&
    css`
      display: auto;
      position: fixed;
      left: 0;
      width: 100vw;
      height: 100%;
      background-color: #0009;
      z-index: 4;
      display: grid;
      align-items: center;
      justify-content: center;
    `}
`;
export const Form = styled.form`
  width: 600px;
  height: 300px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
export const Text = styled.p`
  font-size: 30px;
  text-align: center;
  margin-bottom: 0;
`;
export const Label = styled.label`
  font-size: 25px;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;
export const Input = styled.input``;
export const Button = styled.button`
  width: 100px;
  height: 35px;
  font-size: 22px;
  justify-self: center;
  background-color: ${({ theme }) => theme.colors.hover};
  border: none;
  border-radius: 5px;
`;
