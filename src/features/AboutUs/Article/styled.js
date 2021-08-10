import styled from "styled-components";

export const Text = styled.p`
  line-height: 1.5;
  letter-spacing: 1.2;
  padding: 20px;
  margin-bottom: 100px;
  width: 70%;
  @media (max-width: 767px) {
    padding: 10px;
    width: auto;
  }
`;
export const Image = styled.div`
  background: linear-gradient(white, transparent), url(${(props) => props.foto});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px;
  @media (max-width: 767px) {
    height: 300px;
  }
`;
