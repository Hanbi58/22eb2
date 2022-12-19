import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

*,*::before,*::after{
    margin: 0;
    padding: 0;
}

body{
  overflow: overlay;
    background-color: ${(props) => props.theme.bg};
}

a{
    text-decoration: none;
}

&::-webkit-scrollbar {
  position: absolute;
  width: 10px;
  height: 100vh;
  transform-origin: center right;
  border: none;
  background-color: transparent;
  opacity: 0;
}

&::-webkit-scrollbar-thumb {
  position: absolute;
  top: 0;
  right: 0;
  background-color: 	rgb(30,30,30);
  border-radius:4px;
  transition: all 1s ease;
}
&::-webkit-scrollbar-thumb:hover {
  background-color: ${(props) => props.theme.orange};
}


`;
export default GlobalStyles;
