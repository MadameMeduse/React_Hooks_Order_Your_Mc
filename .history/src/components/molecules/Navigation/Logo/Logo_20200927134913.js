import React from "react";
import { StyledLogoImage } from "./Logo.styled";

const Logo = props => {
  return <StyledLogoImage src={props.logoURL} />;
};

export default Logo;
