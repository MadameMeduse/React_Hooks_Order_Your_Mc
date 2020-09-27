import styled from "styled-components";
import LogoIcon from "assets/icons/logo.svg";
import FlexCenter from "theme/FlexCenter";

export const StyledLogoImage = styled.img`
  ${flexUnit(1, 22, 50, "vw", "width")};
  ${FlexCenter()};
  margin: 0 auto;
`;
