import React, { useState } from "react";
import { Link } from "react-router-dom";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import Logo from "../../molecules/Navigation/Logo/Logo";
import { StyledFooter } from "./Footer.styled.js";
import { StyledLogoImage } from "../Navigation/Logo/Logo.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Logo>
        <StyledLogoImage>
          logoURL={"../../../assets/images/logo-portfolio-sm.png"}
          <StyledLogoImage/>
      </Logo>
      />
      <Paragraph>Made by Monika Waligóra</Paragraph>
    </StyledFooter>
  );
};

export default Footer;
