import GlobalStyles from "./globalStyles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { dark } from "./globalStyles/Themes";
import { Hero } from "./sections";
function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <Hero />
      </ThemeProvider>
    </>
  );
}

export default App;
