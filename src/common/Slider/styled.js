import styled, { keyframes, css } from "styled-components";

const marquee = keyframes` 

  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(-100%, 0);
  }
}
`;

export const Foto = styled.div`
  background-image: url(${(props) => props.foto});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${(props) =>
    props.vertical &&
    css`
      background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url(${(props) => props.foto});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    `}
`;
export const StyledSlider = styled.div`
  position: relative;
  height: 40vh;
  border: 5px solid ${({ theme }) => theme.colors.text};
  display: grid;
  grid-template-columns: 0.9fr 0.7fr 0.4fr 1fr;
  grid-template-rows: 1fr 1fr;
  ${Foto}:nth-child(1), ${Foto}:nth-child(2) {
    border-bottom: 15px solid ${({ theme }) => theme.colors.mainColor};
  }
  ${Foto}:nth-last-child(2) {
    border-right: 15px solid ${({ theme }) => theme.colors.mainColor};
  }

  @media (max-width: 767px) {
    grid-template-columns: 0.9fr 0.7fr 1fr;
    border-width: 3px;
    ${Foto}:nth-child(2) {
      border-bottom: none;
    }
    ${Foto}:nth-child(1) {
      border-width: 10px;
    }
    ${Foto}:nth-child(6) {
      border-width: 10px;
    }
  }
`;

export const InformationField = styled.div`
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
  font-size: 30px;
  white-space: nowrap;
  overflow: hidden;
  padding: 10px;
  margin: 0 auto;
  ${(props) =>
    props.vertical &&
    css`
      display: none;
    `}
  @media (max-width: 767px) {
    font-size: 20px;
    padding: 5px;
  }
`;

export const Text = styled.p`
  display: inline-block;
  margin: 0px;
  padding-left: 100%;
  animation: ${marquee} 30s linear infinite;
`;

export const SubpageInformation = styled.h3`
  display: none;
  ${(props) =>
    props.vertical &&
    css`
      color: white;
      z-index: 1;
      display: block;
      position: absolute;
      bottom: 0px;
      right: 0px;

      font-size: 60px;
      max-width: 450px;
      @media (max-width: 767px) {
        font-size: 30px;
      }
      @media (max-width: 767px) {
        font-size: 30px;
        text-align: right;
        padding-right: 20px;
      }
      @media (max-width: 823px) and (orientation: landscape) {
        font-size: 30px;
        text-align: right;
        padding-right: 20px;
        margin: 10px;
      }
    `}
`;
