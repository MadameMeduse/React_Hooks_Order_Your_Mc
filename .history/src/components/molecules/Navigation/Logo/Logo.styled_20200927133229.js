import styled from "styled-components";
import LogoIcon from "assets/icons/logo.svg";
import FlexCenter from "theme/FlexCenter";

export const StyledLogo = styled.div`
  height: 50px;
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  width: 50%;
  ${FlexCenter()};
  margin: 0 auto;
  background-position: 50% 50%;
`;

export const StyledLogoImage = styled.img`
  width: 50%;
`;
