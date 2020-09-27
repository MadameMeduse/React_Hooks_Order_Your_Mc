import styled from "styled-components";
import FlexCenter from "theme/FlexCenter";
import flexUnit from "theme/FlexUnit";

export const StyledSpan = styled.span`
  ${flexUnit(4, 8, 12, "vw", "font-size")};
  ${FlexCenter()};
  margin: 0 auto;
`;
