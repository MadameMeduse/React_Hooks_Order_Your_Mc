import styled from "styled-components";
import BurgerMenuPic from "assets/icons/burgerMenu.svg";

export const StyledBurger = styled.div`
  width: 20%;
  height: 25px;
  background-image: url(${BurgerMenuPic});
  background-repeat: no-repeat;
  margin-left: 40px;
  cursor: pointer;
  transition: opacity 0.3s, 0.3s ease;

  &:hover {
    opacity: 0.5;
  }
`;
