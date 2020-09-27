import React, { useState } from "react";
import { Link } from "react-router-dom";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import { StyledFooter } from "./Footer.styled.js";

const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <Paragraph>Made by Monika Waligóra</Paragraph>
    </StyledFooter>
  );
};

export default Footer;
