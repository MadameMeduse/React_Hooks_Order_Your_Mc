import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ButtonIcon from "../NavItems/Icons/ButtonIcon";
import facebookIcon from "../../../icons/facebook.svg";
import instagramIcon from "../../../icons/instagram.svg";
import youtubeIcon from "../../../icons/youtube.svg";
import linkedInIcon from "../../../icons/linkedin.svg";
import Burger from "./Burger/Burger";
import Menu from "./Menu/Menu";
import Logo from "./Logo/Logo";

const StyledNavIcons = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 45px;
`;

export const NavItems = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Logo />
      <StyledNavIcons>
        <ButtonIcon
          as={Link}
          to="/https://www.facebook.com/McDonaldsPolska?fref=ts"
          icon={facebookIcon}
        />
        <ButtonIcon
          as={Link}
          to="/https://www.instagram.com/mamsmakanamaka/"
          icon={instagramIcon}
        />
        <ButtonIcon
          as={Link}
          to="/https://www.youtube.com/user/McDonaldsPoland"
          icon={youtubeIcon}
        />
        <ButtonIcon
          as={Link}
          to="/https://pl.linkedin.com/company/mcdonald%27s-polska"
          icon={linkedInIcon}
        />
      </StyledNavIcons>
    </>
  );
};

export default NavItems;
