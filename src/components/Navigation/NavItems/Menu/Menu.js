import React from "react";
import { StyledMenu } from "./Menu.styled";
import { bool } from "prop-types";
import { NavLink } from "react-router-dom";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/cart">Submit your order</NavLink>
      <NavLink to="/about">About this app</NavLink>
      <NavLink exact to="/">
        Log out
      </NavLink>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};
export default Menu;
