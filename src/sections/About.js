import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import styled from "styled-components";

const AboutContainer = styled(motion.section)`
  min-height: 100vh;
  width: 80vw;
  margin: auto;
  color: white;
  overflow: visible;
  /* background-color: red; */
`;

const BigText = styled.div`
  /* margin-top: 5rem; */
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

const BannerComponent = styled.h1`
  font-size: ${(props) => props.theme.fontxxxl};
  color: ${(props) => props.theme.orange};
  line-height: 1;

  span {
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${(props) => props.theme.textLight};
  }

  &:nth-of-type(3) {
    margin-left: 40%;
  }
`;
const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);
  return (
    <AboutContainer>
      <p id="#up">About</p>
      <BigText>
        <h1 data-scroll data-scroll-speed="2" data-scroll-delay="0.15">
          The
          <span> Mission</span>
        </h1>
        <h1
          data-scroll
          data-scroll-speed="6"
          className="disappear"
          data-scroll-class="appear"
          data-scroll-repeat="true"
          data-scroll-delay="0.6"
        >
          is to Spread
        </h1>
      </BigText>
      <div ref={ref}>
        <BannerComponent
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-12"
        >
          <span>the</span> Beauty
        </BannerComponent>
        <BannerComponent
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="10"
        >
          <span>the</span> Truth
        </BannerComponent>
        <BannerComponent
          data-scroll
          data-scroll-direction="horizontal"
          data-scroll-speed="-30"
        >
          <span>the</span> Love
        </BannerComponent>
      </div>
    </AboutContainer>
  );
};

export default About;
