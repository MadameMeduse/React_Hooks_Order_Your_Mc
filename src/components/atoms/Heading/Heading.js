import styled from "styled-components";
import flexUnit from "theme/FlexUnit";

const Heading = styled.h1`
  ${flexUnit(5, 32, 60, "vw", "font-size")};
  text-align: center;
  font-weight: ${({ theme }) => theme.bold};
`;

export default Heading;
