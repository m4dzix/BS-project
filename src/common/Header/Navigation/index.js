import React from "react";
import { Nav, List, StyledNavLink } from "./styled";
import { toSchedule, toAboutUs, toBuild, toBooking } from "../../../routes";

const Navigation = ({ hide, toggleHide }) => {
  return (
    <Nav hide={hide}>
      <List>
        <li>
          <StyledNavLink to={toSchedule()} onClick={toggleHide}>
            Lorem
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={toAboutUs()} onClick={toggleHide}>
            Lorem ipsum
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={toBuild()} onClick={toggleHide}>
            Ipsum dolor
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to={toBooking()} onClick={toggleHide}>
            Ipsum
          </StyledNavLink>
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
