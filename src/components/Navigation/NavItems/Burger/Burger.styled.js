import styled from "styled-components";
import BurgerMenuPic from "../../../../icons/burgerMenu.svg";

export const StyledBurger = styled.div`
  width: 25%;
  height: 25px;
  background-image: url(${BurgerMenuPic});
  background-repeat: no-repeat;
  margin-left: 40px;
  cursor: pointer;
`;
