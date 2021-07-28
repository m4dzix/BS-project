import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 20px;
  @media (max-width: 1024px) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;
  }
`;
export const StyledCalendar = styled.iframe`
  height: 450px;
  width: 100%;
  border: solid 2px ${({ theme }) => theme.colors.text};
  border-radius: 5px;
`;
export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  height: 350px;
  display: grid;
  padding: 10px;
  grid-gap: 10px;
`;
export const Input = styled.input`
  font-size: 20px;
`;
export const Button = styled.button`
  width: 150px;
  border: solid 1px ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.mainColor};
  padding: 5px;
  font-weight: bold;
  transition: 0.5s;
  &:hover {
    filter: brightness(1.2);
    transform: scale(1.05);
  }
`;
