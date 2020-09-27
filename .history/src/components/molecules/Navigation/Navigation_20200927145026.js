import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavIcon from "components/molecules/Navigation/NavIcon/NavIcon";
import facebookIcon from "assets/icons/facebook.svg";
import instagramIcon from "assets/icons/instagram.svg";
import youtubeIcon from "assets/icons/youtube.svg";
import linkedInIcon from "assets/icons/linkedin.svg";
import Burger from "components/molecules/Navigation/Burger/Burger";
import Menu from "components/molecules/Navigation/Menu/Menu";
import Logo from "components/molecules/Navigation/Logo/Logo";
import { StyledNavigation, StyledNavIcons } from "./Navigation.styled";
import NavigationImage from "assets/images/logoMcD.svg";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
    <StyledNavigation>
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
      <Logo image={NavigationImage} />
      <StyledNavIcons>
        <NavIcon
          as={Link}
          to="/https://www.facebook.com/McDonaldsPolska?fref=ts"
          icon={facebookIcon}
        />
        <NavIcon
          as={Link}
          to="/https://www.instagram.com/mamsmakanamaka/"
          icon={instagramIcon}
        />
        <NavIcon
          as={Link}
          to="/https://www.youtube.com/user/McDonaldsPoland"
          icon={youtubeIcon}
        />
        <NavIcon
          as={Link}
          to="/https://pl.linkedin.com/company/mcdonald%27s-polska"
          icon={linkedInIcon}
        />
      </StyledNavIcons>
    </StyledNavigation>
  );
};
export default Navigation;
