import styled from "styled-components";
import footerImage from "../../../assets/images/footer.jpg";
import flexUnit from "../../../theme/FlexUnit";

export const StyledFooter = styled.footer`
  background: url(${footerImage});
  bottom: 0;
  width: 100vw;
  min-height: 10vh;
  margin-top: 3vw;
  ${flexUnit(2, 10, 30, "vw", "padding")};
  p {
    padding: 0 2vw;
    margin: 0;
    ${flexUnit(1, 22, 50, "vw", "font-size")};
  }

  img {
    max-width: 30px;
    max-height: 30px;
  }
`;
