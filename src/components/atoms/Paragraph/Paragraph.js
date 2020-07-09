import styled from "styled-components";
import flexUnit from "theme/Mixins";

const Paragraph = styled.p`
  ${flexUnit(3, 22, 50, "vw", "font-size")};
  padding: 0 10vw;
  text-align: center;
`;

export default Paragraph;
