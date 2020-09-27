import React from "react";
import styled from "styled-components";
import LogoIcon from "assets/icons/logo.svg";
import FlexCenter from "theme/FlexCenter";

const Logo = props => {
  return (
    <StyledLogo>
      <StyledLogoImage src={props.logo} />
    </StyledLogo>
  );
};

export default Logo;
