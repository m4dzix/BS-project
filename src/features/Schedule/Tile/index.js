import React from "react";
import {
  StyledTile,
  Name,
  Language,
  List,
  Key,
  Value,
  Icon,
} from "./styled.js";

const Tile = ({ hidden, name, language, day, icon, time }) => (
  <StyledTile>
    <Name>
      {name}
      {!!icon ? <Icon src={icon} alt="sign" /> : null}
    </Name>
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
