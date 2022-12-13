import GlobalStyles from "./globalStyles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { dark } from "./globalStyles/Themes";
import { Hero } from "./sections";
function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          watch={[]}
        >
          <GlobalStyles />
          <Hero />
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
