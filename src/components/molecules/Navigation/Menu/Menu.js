import React from "react";
import { StyledMenu, StyledNavLink } from "./Menu.styled";
import { bool } from "prop-types";

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <StyledNavLink activeClassName="active" to="/home">
        Home
      </StyledNavLink>
      <StyledNavLink to="/menu">Menu</StyledNavLink>
      <StyledNavLink to="/cart">Your order</StyledNavLink>
      <StyledNavLink to="/about">About this app</StyledNavLink>
      <StyledNavLink exact to="/">
        Log out
      </StyledNavLink>
    </StyledMenu>
  );
};

Menu.propTypes = {
  open: bool.isRequired
};
export default Menu;
