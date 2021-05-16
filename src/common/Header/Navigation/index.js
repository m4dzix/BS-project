import React from "react";
import { Nav, List, StyledNavLink } from "./styled";
import { toSchedule, toAboutUs, toBuild } from "../../../routes";

const Navigation = ({ hide }) => {
  return (
    <Nav hide={hide}>
      <List>
        <li>
          <StyledNavLink to={toSchedule()}>Lorem</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={toAboutUs()}>Lorem ipsum</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={toBuild()}>Ipsum dolor</StyledNavLink>
        </li>
        <li>
          <StyledNavLink
            as="a"
            href="https://www.google.com/"
            target="_blanc"
            rel="noreferer noopener"
          >
            Lorem
          </StyledNavLink>
        </li>
      </List>
    </Nav>
  );
};
export default Navigation;
