import styled from "styled-components";
import FlexCenter from "theme/FlexCenter";
import flexUnit from "theme/FlexUnit";

export const StyledLogoImage = styled.img`
  ${flexUnit(6, 30, 80, "vw", "width")};
  ${FlexCenter()};
  margin: 0 auto;
`;
