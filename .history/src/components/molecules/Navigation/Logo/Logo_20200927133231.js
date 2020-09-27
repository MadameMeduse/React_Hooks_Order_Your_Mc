import React from "react";

const Logo = props => {
  return (
    <StyledLogo>
      <StyledLogoImage src={props.logo} />
    </StyledLogo>
  );
};

export default Logo;
