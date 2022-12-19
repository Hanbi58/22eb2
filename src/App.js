import GlobalStyles from "./globalStyles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { dark } from "./globalStyles/Themes";
import { Hero, About, Chameleon } from "./sections";

function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Hero />
        <About />
        <Chameleon />
      </ThemeProvider>
    </>
  );
}

export default App;
