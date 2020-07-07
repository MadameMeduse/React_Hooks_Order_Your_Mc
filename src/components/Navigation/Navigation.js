import React from "react";
import styled from "styled-components";
import NavIcons from "./NavIcons/NavIcons";

const StyledNavigation = styled.nav`
  width: 100vw;
  height: 100px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = () => {
  return (
    <StyledNavigation>
      <NavIcons />
    </StyledNavigation>
  );
};

export default Navigation;
