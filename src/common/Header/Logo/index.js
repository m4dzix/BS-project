import React from "react";
import { SquareLink, Text } from "./styled";
import { toSchedule } from "../../../routes";

const Logo = () => (
  <SquareLink to={toSchedule()}>
    <Text>JZ</Text>
  </SquareLink>
);

export default Logo;
