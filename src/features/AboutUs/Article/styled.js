import styled from "styled-components";

export const Text = styled.p`
  font-size: 22px;
  line-height: 1.5;
  letter-spacing: 1.2;
  margin-bottom: 100px;
  width: 70%;
`;
export const Image = styled.div`
  background: linear-gradient(white, transparent), url(${(props) => props.foto});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 400px; ;
`;
