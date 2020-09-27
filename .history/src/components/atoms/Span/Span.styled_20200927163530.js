import styled from "styled-components";
import FlexCenter from "theme/FlexCenter";
import flexUnit from "theme/FlexUnit";

export const StyledSpan = styled.span`
  ${flexUnit(6, 60, 80, "vw", "width")};
  ${FlexCenter()};
  margin: 0 auto;
`;
