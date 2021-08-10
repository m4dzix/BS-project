import styled from "styled-components";

export const StyledLocalization = styled.div`
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 400px;
  height: 400px;
  @media (max-width: 767px) and (orientation: landscape) {
    grid-template-columns: 1fr 1fr;
    justify-content: center;
  }
  @media (max-width: 767px) and (orientation: portrait) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    height: auto;
  }
  @media (max-width: 600px) {
    grid-template-columns: none;
    grid-template-rows: 1fr 1fr;
    height: auto;
  }
`;

export const List = styled.dl`
  list-style: none;
  padding: 30px;
  @media (max-width: 767px) {
    padding: 10px;
  }
  @media (max-width: 767px) and(orientation:portrait) {
    margin: 0 auto;
  }
`;

export const Key = styled.dt`
  font-size: 25px;
  font-weight: bold;
  padding: 10px;
  @media (max-width: 767px) {
    font-size: 18px;
    padding: 5px;
  }
`;

export const Value = styled.dd`
  font-size: 22px;
  padding: 10px;

  @media (max-width: 767px) {
    font-size: 15px;
    padding: 0;
    margin: 10px;
  }
`;
