import React from "react";
import { StyledIcons } from "./styled";
import MenuHamburger from "./MenuHamburger";
import LoginButton from "./LoginButton";

const Icons = ({ hide, toggleHide }) => (
  <StyledIcons>
    <LoginButton />
    <MenuHamburger hide={hide} toggleHide={toggleHide} />
  </StyledIcons>
);

export default Icons;
