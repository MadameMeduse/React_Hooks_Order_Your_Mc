import React from "react";
import StyledLogo from "./Logo.styled";
const Logo = props => {
  return (
    <StyledLogo>
      <StyledLogoImage src={props.logo} />
    </StyledLogo>
  );
};

export default Logo;
