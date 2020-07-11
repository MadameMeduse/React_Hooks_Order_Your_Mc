import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`


*, *::before, *::after {
box-sizing: border-box;
-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}


html {
    font-size: 62.5%; 
}

body {
    font-size: 1.6rem;
    font-family: 'Montserrat', sans-serif;
    list-style: none;
    padding-top: 100px;
}

button {
    cursor: pointer;
    border: none;
}



`;

export default GlobalStyles;
