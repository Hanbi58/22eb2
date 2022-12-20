import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";
const ChameleonInnerSec = styled(motion.div)`
  width: 100%;
  height: 10vh;
  /* transform: scaleY(1.1); */
  background-color: ${(props) => props.theme.bg};
  /* background-color: transparent; */
`;

const ChameleonInner = (props) => {
  let { scrollYProgress } = useScroll({
    target: props.refComp,
    // offset: ["start start", "start start "],
  });

  return (
    <ChameleonInnerSec
      style={{
        scaleY: useTransform(scrollYProgress, [0.9, 1], [0, 1.01]),
      }}
    />
  );
};

export default ChameleonInner;
