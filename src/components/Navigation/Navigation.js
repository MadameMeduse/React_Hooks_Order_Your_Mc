import React from "react";
import styled from "styled-components";
import NavItems from "./NavItems/NavItems";

const StyledNavigation = styled.nav`
  width: 100vw;
  height: 100px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavItems />
    </StyledNavigation>
  );
};

export default Navigation;

//closeBurgerMenuFn={this.closeBurgerMenu}
