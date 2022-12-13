import { createGlobalStyle } from "styled-components";
// import "@fontsource/kaushan-script";
// import "@fontsource/sirin-stencil";

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
    overflow-x: hidden;
    background-color: ${(props) => props.theme.bg};
    min-height:300vh;
}


a{
    text-decoration: none;
}

`;
export default GlobalStyles;
