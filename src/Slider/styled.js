import styled, { keyframes } from "styled-components";

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
`;
export const StyledSlider = styled.div`
  height: 40%;
  background-color: ${({ theme }) => theme.colors.mainColor};
  border: 5px solid ${({ theme }) => theme.colors.text};
  display: grid;
  grid-template-columns: 0.9fr 0.7fr 0.4fr 1fr;
  grid-template-rows: 1fr 1fr;
  ${Foto}:nth-child(1), ${Foto}:nth-child(2) {
    border-bottom: 15px solid ${({ theme }) => theme.colors.mainColor};
  }
  ${Foto}:last-child {
    border-right: 15px solid ${({ theme }) => theme.colors.mainColor};
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
`;
export const Text = styled.p`
  display: inline-block;
  margin: 0px;
  padding-left: 100%;
  animation: ${marquee} 30s linear infinite;
`;
