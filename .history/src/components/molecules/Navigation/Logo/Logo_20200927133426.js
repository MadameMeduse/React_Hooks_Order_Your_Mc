import React from "react";
import { StyledLogo, StyledLogoImage } from "./Logo.styled";

const Logo = props => {
  return (
    <StyledLogo>
      <StyledLogoImage src={props.logo} />
    </StyledLogo>
  );
};

export default Logo;
