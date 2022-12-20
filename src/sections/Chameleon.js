import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ChameleonInner from "../components/ChameleonInner";
import styled from "styled-components";
import TreeImg from "../assets/palm/tree.png";

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 100vw;
  min-height: 100vh;
  z-index: -2;
  background-color: ${(props) => props.theme.bgLight};
  overflow: hidden;
  /* background-color: red; */
`;

const ChameleonBg = styled(motion.div)`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  top: 0;
  z-index: -1;
  /* left: -10vw; */
  /* background-color: ${(props) => props.theme.bgLight}; */
`;

const MainText = styled.p`
  color: white;
  z-index: 1;
  font-family: ${(props) => props.theme.fontB};
  font-size: ${(props) => props.theme.fontxxl};
  mix-blend-mode: exclusion;
  max-width: 75vw;
  margin-left: 10vw;
  line-height: 1.5;
  letter-spacing: 0.2rem;
`;

const SecText = styled.p`
  color: white;

  z-index: 1;
  font-family: ${(props) => props.theme.fontD};
  font-size: ${(props) => props.theme.fontxxxl};
  mix-blend-mode: exclusion;
  max-width: 60vw;
  position: absolute;
  bottom: 1vw;
  left: 10vw;
  small {
    color: ${(props) => props.theme.orange};
    filter: invert();
  }
`;

const TreeImgContainer = styled.div`
  width: 60vw;
  height: 100vh;
  position: absolute;
  right: -10vw;
  top: 10%;
  /* transform: translateX(-10%); */
  background: center/contain no-repeat url(${(props) => props.imgsrc});
  filter: invert();
  /* opacity: 0.85; */
  mix-blend-mode: difference;
`;

const dat = new Date();
dat.setDate(dat.getDate() + ((8 - dat.getDay()) % 7 || 7));

const Chameleon = () => {
  const chamRef = useRef(null);
  // let y = useTransform(scrollYProgress, [0, 100], ["0%", "100%"]);

  return (
    <Container>
      <MainText>
        “Something that is created with imagination and skill and that is
        beautiful.” Often, art is defined by its origin in the human mind.
        Imagination plays a key role in making any piece of art. Some people
        think of art as what happens when your creativity takes solid form. Art
        in any form is an expression or application of human creativity, skill,
        and imagination.
      </MainText>
      <TreeImgContainer imgsrc={TreeImg} />
      <SecText>
        Next week new in house.
        <br />
        <small ref={chamRef}>Starts{` ${dat.toDateString()}`}</small>
      </SecText>
      <ChameleonBg>
        {[...Array(10)].map((n, i) => (
          <ChameleonInner refComp={chamRef} key={`${i}`} />
        ))}
      </ChameleonBg>
    </Container>
  );
};

export default Chameleon;
