import React from "react";
import { StyledLogo, StyledLogoImage } from "./Logo.styled";

const Logo = props => {
  return <StyledLogoImage src={props.logoURL} />;
};

export default Logo;
