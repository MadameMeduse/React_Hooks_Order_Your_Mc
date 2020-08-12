import styled, { css } from "styled-components";
import flexUnit from "theme/FlexUnit";
import FlexCenter from "../../../theme/FlexCenter";

const Button = styled.button`
  padding: 0;
  background-color: ${({ theme }) => theme.primaryYellow};
  width: 220px;
  height: 47px;
  border: none;
  border-radius: 50px;
  font-family: "Montserrat";
  font-weight: 600;
  font-size: 16px;
  text-decoration: none;
  color: black;
  ${FlexCenter()};
  text-transform: uppercase;
  cursor: pointer;
  ${flexUnit(2, 20, 50, "vw", "margin-top")};
  transition: all 0.2s 0.1s ease;
  border: solid 3px ${({ theme }) => theme.primaryYellow};
  margin: 0 auto;

  &:hover {
    background: transparent;
    box-shadow: ${({ theme }) => theme.shadow};
  }

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: hsl(0, 0%, 90%);
      width: 105px;
      height: 30px;
      font-size: 10px;
    `};
`;

export default Button;
