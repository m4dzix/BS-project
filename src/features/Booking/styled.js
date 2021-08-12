import styled from "styled-components";
import { Link } from "react-router-dom";

export const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
`;
export const See = styled.div`
  display: none;
  position: absolute;
  width: 70%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  padding: 10px;
  text-align: center;
  box-shadow: 1px 2px 3px 4px ${({ theme }) => theme.colors.text};
  transition: 0.5s;
  font-weight: bold;
`;
export const StyledLink = styled(Link)`
  background: url(${(props) => props.foto});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 1px 2px 3px 4px ${({ theme }) => theme.colors.hover};
  display: flex;
  transition: 0.5s;
  position: relative;
  height: 250px;
  &:hover {
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${(props) => props.foto});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transform: scale(1.025);
    ${See} {
      display: block;
    }
  }
`;

export const Text = styled.p`
  background-color: white;
  color: ${({ theme }) => theme.colors.text};
  font-size: 25px;
  align-self: flex-end;
  width: 100%;
  text-align: center;
  font-weight: bold;
  padding: 5px;
  margin: 0px;
`;
