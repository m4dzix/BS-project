import React from "react";
import { Nav, List, StyledNavLink, Link } from "./styled";
import { toSchedule, toAboutUs, toBuild } from "../../../routes";

const Navigation = () => (
  <Nav>
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
        <Link
          href="https://www.google.com/"
          target="_blanc"
          rel="noreferer noopener"
        >
          Lorem
        </Link>
      </li>
    </List>
  </Nav>
);

export default Navigation;
