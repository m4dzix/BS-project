import styled, { css } from "styled-components";
import { X } from "@styled-icons/heroicons-solid/X";

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
      display: flex;
      align-items: center;
      justify-content: center;
    `}
`;
export const Form = styled.form`
  width: 90%;
  max-width: 600px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  display: grid;
  grid-gap: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: relative;
  @media (max-width: 767px) {
    padding: 5px;
  }
`;
export const XIcon = styled(X)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 35px;
  height: 35px;
  &:hover {
    transform: scale(1.3);
    color: ${({ theme }) => theme.colors.hover};
  }
`;
export const Text = styled.p`
  font-size: 30px;
  text-align: center;
  margin-bottom: 0;
  ${(props) =>
    props.IncorrectData &&
    css`
      color: red;
      font-size: 20px;
      margin-bottom: 10px;
    `}
  @media (max-width: 767px) {
    font-size: 25px;
    ${(props) =>
      props.IncorrectData &&
      css`
        font-size: 18px;
      `}
  }
`;
export const Label = styled.label`
  font-size: 25px;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 2fr;
  @media (max-width: 767px) {
    font-size: 20px;
    text-align: start;
  }
  @media (max-width: 340px) {
    grid-template-columns: none;
    grid-template-rows: 1fr;
  }
`;
export const Input = styled.input`
  ${(props) =>
    props.IncorrectData &&
    css`
      border-color: red;
    `}
`;
export const Button = styled.button`
  width: 100px;
  height: 35px;
  font-size: 22px;
  justify-self: center;
  background-color: ${({ theme }) => theme.colors.hover};
  border: none;
  border-radius: 5px;
`;
