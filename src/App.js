import GlobalStyles from "./globalStyles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { dark } from "./globalStyles/Themes";
import { Hero, About } from "./sections";
import { useRef } from "react";
import { AnimatePresence } from "framer-motion";

function App() {
  const containerRef = useRef(null);
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyles />
        <LocomotiveScrollProvider
          options={{
            smooth: true,
          }}
          watch={[]}
          containerRef={containerRef}
        >
          <AnimatePresence>
            <div data-scroll-container ref={containerRef}>
              <Hero />
              <About />
            </div>
          </AnimatePresence>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
