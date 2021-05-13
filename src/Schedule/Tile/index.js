import React from "react";
import { StyledTile, Name, Language, List, Key, Value } from "./styled.js";

const Tile = ({ hidden, name, language, day, time }) => (
  <StyledTile>
    <Name>{name}</Name>
    <Language hidden={hidden}>{language}</Language>
    <List>
      <Key>{day[0]}:</Key>
      <Value>{time[0]}</Value>
      <Key>{day[1]}:</Key>
      <Value>{time[1]}</Value>
    </List>
  </StyledTile>
);

export default Tile;
