import React from "react";
import { Button } from "./styled";
import { Menu } from "@styled-icons/heroicons-solid/Menu";
import { X } from "@styled-icons/heroicons-solid/X";

const MenuHamburger = ({ hide, toggleHide }) => {
  return <Button onClick={toggleHide}>{hide ? <Menu /> : <X />}</Button>;
};

export default MenuHamburger;
