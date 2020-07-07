import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ButtonIcon from "../NavIcons/ButtonIcon";
import facebookIcon from "../../../icons/facebook.svg";
import instagramIcon from "../../../icons/instagram.svg";
import youtubeIcon from "../../../icons/youtube.svg";
import linkedInIcon from "../../../icons/linkedin.svg";
import LogoIcon from "../../../icons/logo.svg";
import BurgerMenu from "../../../icons/burgerMenu.svg";

const StyledBurgerMenu = styled.div`
  width: 25%;
  height: 25px;
  background-image: url(${BurgerMenu});
  background-repeat: no-repeat;
  margin-left: 40px;
`;
const StyledLogo = styled.div`
  width: 50%;
  height: 50px;
  background-image: url(${LogoIcon});
  background-repeat: no-repeat;
  display: flex;
  background-position: 50% 50%;
`;

const StyledNavIcons = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 45px;
`;

const NavIcons = () => {
  return (
    <>
      <StyledBurgerMenu />
      <StyledLogo />
      <StyledNavIcons>
        <ButtonIcon
          as={Link}
          to="https://www.facebook.com/McDonaldsPolska?fref=ts"
          icon={facebookIcon}
        />
        <ButtonIcon
          as={Link}
          to="https://www.instagram.com/mamsmakanamaka/"
          icon={instagramIcon}
        />
        <ButtonIcon
          as={Link}
          to="https://www.youtube.com/user/McDonaldsPoland"
          icon={youtubeIcon}
        />
        <ButtonIcon
          as={Link}
          to="https://pl.linkedin.com/company/mcdonald%27s-polska"
          icon={linkedInIcon}
        />
      </StyledNavIcons>
    </>
  );
};

export default NavIcons;
