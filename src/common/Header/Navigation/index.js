import React from "react";
import { Nav, List, StyledNavLink } from "./styled";
import { toSchedule, toAboutUs, toBuild, toBooking } from "../../../routes";
import { useAuth0 } from "@auth0/auth0-react";

const Navigation = ({ hide, toggleHide }) => {
  const { isAuthenticated } = useAuth0();
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
        {isAuthenticated ? (
          <li>
            <StyledNavLink to={toBooking()} onClick={toggleHide}>
              Ipsum
            </StyledNavLink>
          </li>
        ) : null}
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
