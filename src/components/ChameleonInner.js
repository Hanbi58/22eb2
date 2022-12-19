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

const ChameleonInner = () => {
  let { scrollYProgress } = useScroll({
    target: "#cham",
    offset: ["start start", "end end"],
  });

  return (
    <ChameleonInnerSec
      style={{
        scaleY: useTransform(scrollYProgress, [0.9, 1], [1, 0]),
      }}
    />
  );
};

export default ChameleonInner;
