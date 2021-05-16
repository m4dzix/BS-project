import React, { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Title from "./Title";
import { StyledHeader } from "./styled";
import MenuHamburger from "./MenuHamburger";

const Header = () => {
  const [hide, setHide] = useState(true);
  const toggleHide = () => setHide(!hide);
  return (
    <StyledHeader>
      <Logo />
      <MenuHamburger toggleHide={toggleHide} />
      <Title title={"Lorem ipsum dolor"} />
      <Navigation hide={hide} />
    </StyledHeader>
  );
};
export default Header;
