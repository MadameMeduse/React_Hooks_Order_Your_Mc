import React from "react";
// import { Link } from "react-router-dom";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Logo from "../../molecules/Navigation/Logo/Logo";
import { StyledFooter } from "./Footer.styled.js";
import FooterImage from "assets/images/logo-portfolio-sm.png";
import { StyledSpan } from "../../atoms/Span/Span.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Logo image={FooterImage}></Logo>
      <Paragraph>Made by Monika Waligóra</Paragraph>
      <StyledSpan>All right reserverd &reg; &#9829; </StyledSpan>
    </StyledFooter>
  );
};

export default Footer;
