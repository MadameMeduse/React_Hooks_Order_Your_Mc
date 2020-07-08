import React from "react";
import styled from "styled-components";
import LogoIcon from "../../../../icons/logo.svg";

const StyledLogo = styled.div`
  width: 50%;
  height: 50px;
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  display: flex;
  background-position: 50% 50%;
`;

const Logo = () => {
  return <StyledLogo />;
};

export default Logo;
