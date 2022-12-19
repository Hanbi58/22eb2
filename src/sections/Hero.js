import styled, { keyframes } from "styled-components";
import Herovideo from "../assets/hero/Hero_Video_clip.mp4";
import HeroLogo from "../assets/hero/HeroLogo3.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
const HeroContainer = styled.div`
  width: 80vw;
  height: 110vh;
  margin: 0 auto 50vh;
`;

const scale = keyframes`
  from {
    height: 50%;
  }

  to {
    height: 0;
  }
`;

const HeroVideo = styled(motion.div)`
  position: relative;
  top: 30px;
  width: 100%;
  height: 60%;
  margin: auto;
  color: white;
  z-index: 2;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .blackout {
    position: absolute;
    height: 0;
    width: 100%;
    background-color: ${(props) => props.theme.bg};
    z-index: 1;
    animation: ${scale} 2s linear;
  }
  .up {
    top: 0;
  }
  .down {
    bottom: 0;
  }
`;

const LogoComp = styled(motion.div)`
  position: relative;
  margin-top: 20px;
  height: 80px;
  width: 400px;
  display: flex;
  justify-content: space-between;
  div:nth-of-type(1) {
    background: url(${HeroLogo}) center/cover;
    width: 80px;
    height: 100%;
  }
  div:nth-of-type(2) {
    color: ${(props) => props.theme.textLight};
    width: 300px;
    height: 105%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    small {
      position: absolute;
      display: block;
      top: 40%;
      white-space: nowrap;
      font-size: ${(props) => props.theme.fontxs};
      font-family: ${(props) => props.theme.fontB};
    }

    p {
      white-space: nowrap;
      font-size: ${(props) => props.theme.fontlg};
      font-family: ${(props) => props.theme.fontA};
    }
    p:nth-of-type(1),
    p:nth-of-type(2) span {
      color: transparent;
      -webkit-text-stroke-width: 0.25px;
      -webkit-text-stroke-color: ${(props) => props.theme.textLight};
    }
  }
`;

const Embrace = styled(motion.div)`
  position: relative;
  bottom: -4vw;
  left: -5vw;
  h1 {
    color: ${(props) => props.theme.textLight};
    font-family: ${(props) => props.theme.fontD};
    font-size: ${(props) => props.theme.fontBiger};

    line-height: 75%;
    position: absolute;
    z-index: 1;
  }
  h1 span {
    position: relative;
    /* left: -5rem; */
    color: ${(props) => props.theme.orange};
  }
  h1:nth-of-type(2) {
    z-index: 3;
    color: transparent;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: ${(props) => props.theme.textLight};
  }
  h1:nth-of-type(2) span {
    color: transparent;
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: ${(props) => props.theme.orange};
  }
`;
const logoVariant = {
  hide: { opacity: 0, y: "-50%" },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 2, duration: 1 },
  },
};
const embVariant = {
  hide: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 1, duration: 2 },
  },
};

const Hero = () => {
  const headerRef = useRef(null);
  let { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start start", "end start"],
  });

  return (
    <HeroContainer id="hero">
      <LogoComp variants={logoVariant} initial="hide" animate="show">
        <div></div>
        <div>
          <p>INTERDISCIPLINARY</p>
          <small>News Upcoming-Events Presentation Press</small>
          <p>
            <span>Fine art</span> SHOWROOM
          </p>
        </div>
      </LogoComp>

      <HeroVideo
        ref={headerRef}
        style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "72%"]) }}
      >
        <div className="up blackout"></div>
        <video src={Herovideo} type="video/mp4" autoPlay muted loop />
        <div className="down blackout"></div>
      </HeroVideo>
      <Embrace variants={embVariant} initial="hide" animate="show">
        <h1>
          EMB
          <span>
            &#x2022;
            <br />
          </span>
          RACE
        </h1>
        <h1>
          EMB
          <span>
            &#x2022;
            <br />
          </span>
          RACE
        </h1>
      </Embrace>
    </HeroContainer>
  );
};

export default Hero;
