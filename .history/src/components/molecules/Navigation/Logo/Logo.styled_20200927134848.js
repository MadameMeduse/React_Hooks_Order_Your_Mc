import styled from "styled-components";
import LogoIcon from "assets/icons/logo.svg";
import FlexCenter from "theme/FlexCenter";

export const StyledLogo = styled.div`
  /* background-image: url(${LogoIcon});
  background-repeat: no-repeat; */
  height: 50px;
  width: 50%;
  ${FlexCenter()};
  margin: 0 auto;
  background-position: 50% 50%;
`;

export const StyledLogoImage = styled.img`
  height: 50px;
  width: 50%;
  ${FlexCenter()};
  margin: 0 auto;
`;
