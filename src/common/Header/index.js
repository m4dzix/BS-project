import React, { useState } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Title from "./Title";
import { StyledHeader } from "./styled";
import Icons from "./Icons";

const Header = () => {
  const [hide, setHide] = useState(true);
  const toggleHide = () => setHide(!hide);

  return (
    <StyledHeader>
      <Logo />
      <Icons hide={hide} toggleHide={toggleHide} />
      <Title title={"Lorem ipsum dolor"} />
      <Navigation hide={hide} toggleHide={toggleHide} />
    </StyledHeader>
  );
};
export default Header;
