import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Title from "./Title";

const Header = () => (
  <div>
    <Title title={"Lorem ipsum dolor"} />
    <Navigation />
    <Logo />
  </div>
);

export default Header;
