import React, { useState } from "react";
import Navigation from "./Navigation";
import Title from "./Title";
import { StyledHeader } from "./styled";
import MenuHamburger from "./MenuHamburger";
import LoginButton from "./LoginButton";

const Header = () => {
  const [hide, setHide] = useState(true);
  const toggleHide = () => setHide(!hide);

  return (
    <StyledHeader>
      <LoginButton />
      <MenuHamburger hide={hide} toggleHide={toggleHide} />
      <Title title={"Lorem ipsum dolor"} />
      <Navigation hide={hide} toggleHide={toggleHide} />
    </StyledHeader>
  );
};
export default Header;
