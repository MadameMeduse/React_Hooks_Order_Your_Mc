import React from "react";
import styled from "styled-components";
import LogoIcon from "assets/icons/logo.svg";

const StyledLogo = styled.div`
  height: 50px;
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  background-position: 50% 50%;
`;

const Logo = () => {
  return <StyledLogo />;
};

export default Logo;
