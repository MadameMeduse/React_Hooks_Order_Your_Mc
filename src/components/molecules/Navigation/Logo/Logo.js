import React from "react";
import styled from "styled-components";
import LogoIcon from "assets/icons/logo.svg";
import FlexCenter from "theme/FlexCenter";

const StyledLogo = styled.div`
  height: 50px;
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  width: 50%;
  ${FlexCenter()};
  background-position: 50% 50%;
`;

const Logo = () => {
  return <StyledLogo />;
};

export default Logo;
