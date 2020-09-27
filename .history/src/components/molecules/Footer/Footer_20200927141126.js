import React, { useState } from "react";
// import { Link } from "react-router-dom";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Logo from "../../molecules/Navigation/Logo/Logo";
import { StyledFooter } from "./Footer.styled.js";
import FooterImage from "../../../assets/images/logo-portfolio-sm.png";

const Footer = () => {
  return (
    <StyledFooter>
      <Logo image={FooterImage}></Logo>
      <Paragraph>Made by Monika Waligóra</Paragraph>
    </StyledFooter>
  );
};

export default Footer;
