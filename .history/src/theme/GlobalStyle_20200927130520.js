import { createGlobalStyle } from "styled-components";
import SpeedeeReg from "../assets/fonts/Speedee_W_Rg.91796517.woff";
import SpeedeeBold from "../assets/fonts/Speedee_W_Bd.ed8982a4.woff";

const GlobalStyles = createGlobalStyle`


*, *::before, *::after {
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

@font-face {
  font-family: 'mainBold';
  font-style: normal;
  font-weight: 700;
  src: local('Speedee_W_Bd.ed8982a4'), local('Speedee_W_Bd.ed8982a4'),
       url(${SpeedeeBold}) format('woff'), /* Modern Browsers */
}
@font-face {
  font-family: 'main';
  font-style: normal;
  font-weight: 400;
  src: local('Speedee_W_Rg.91796517'), local('Speedee_W_Rg.91796517'),
       url(${SpeedeeReg}) format('woff'), /* Modern Browsers */
}


html {
    font-size: 62.5%;
}

body {
    font-size: 1.6rem;
    font-family: 'Montserrat';
    list-style: none;
    padding-top: 100px;
    margin: 0;
    padding: 0;
}

button {
    cursor: pointer;
    border: none;
}

`;

export default GlobalStyles;
