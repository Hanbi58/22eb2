import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const AboutContainer = styled.section`
  /* min-height: 100vh; */
  width: 80vw;
  margin: auto;
  color: white;
  overflow: visible;
`;

const TextContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const BigText = styled.div`
  flex: 5;
  h1 {
    font-size: ${(props) => props.theme.fontBig};
    font-family: ${(props) => props.theme.fontA};
    color: ${(props) => props.theme.textLight};
    text-align: right;
  }
  h1:nth-of-type(1) {
    color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: ${(props) => props.theme.textLight};
  }
  span {
    color: ${(props) => props.theme.orange};
    -webkit-text-stroke-width: 0px;
  }
  .disappear {
    opacity: 0;
    transition: opacity 4s ease;
  }
  .appear {
    opacity: 1;
  }
`;

const MidText = styled(motion.div)`
  flex: 1;
  align-self: center;
`;

const BannerComponent = styled(motion.h1)`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.textLight};
  line-height: 1;

  span {
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${(props) => props.theme.textLight};
  }
  big {
    color: ${(props) => props.theme.orange};
  }
`;
const About = () => {
  const ref = useRef(null);
  const pageRef = useRef(null);
  const isInView = useInView(ref, { once: false });

  let { scrollYProgress } = useScroll();
  return (
    <AboutContainer ref={pageRef}>
      <p>About</p>
      <TextContainer>
        <BigText>
          <motion.h1
            style={{
              y: useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]),
            }}
          >
            The
            <span> Mission</span>
          </motion.h1>
          <motion.h1
            style={{
              opacity: isInView ? 1 : 0,
              transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1)",
              y: useTransform(scrollYProgress, [0, 1], ["0%", "-250%"]),
            }}
          >
            is to Spread
          </motion.h1>
        </BigText>
        <MidText>
          <BannerComponent
            ref={ref}
            style={{
              transform: isInView ? "none" : "translateY(100px)",
              opacity: isInView ? 1 : 0,
              transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              y: useTransform(scrollYProgress, [0, 1], ["0%", "-1000%"]),
            }}
          >
            <span>The</span> Truth <span>The</span> Beauty <span>The</span>
            <big> Love</big>
          </BannerComponent>
        </MidText>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
