import styled from "styled-components";
import footerImage from "../../../assets/images/footer.jpg";
import flexUnit from "../../../theme/FlexUnit";

export const StyledFooter = styled.footer`
  background: url(${footerImage});
  bottom: 0;
  width: 100vw;
  min-height: 10vh;
  margin-top: 3vw;
  padding: 3vw;
  p {
    padding: 0 2vw;
    margin: 0;
    ${flexUnit(1, 22, 50, "vw", "font-size")};
  }
`;
