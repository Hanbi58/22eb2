import styled, { keyframes } from "styled-components";
import Herovideo from "../assets/hero/Hero_Video_clip.mp4";
import HeroLogo from "../assets/hero/HeroLogo3.svg";
import { motion } from "framer-motion";
const HeroContainer = styled.div`
  width: 80vw;
  height: 100vh;
  margin: auto;
`;

const scale = keyframes`
  from {
    height: 50%;
  }

  to {
    height: 0;
  }
`;

const HeroVideo = styled.div`
  position: relative;
  top: 50px;
  width: 100%;
  height: 65%;
  margin: auto;
  color: white;
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

const LogoComp = styled.div`
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

const Embrace = styled(motion.dev)`
  position: absolute;
  bottom: 0;
  h1 {
    color: ${(props) => props.theme.textLight};
    font-family: ${(props) => props.theme.fontA};
    font-size: ${(props) => props.theme.fontBiger};
    line-height: 70%;
  }
  h1:nth-of-type(2) {
    color: transparent;
    -webkit-text-stroke-width: 5px;
    -webkit-text-stroke-color: ${(props) => props.theme.textLight};
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <LogoComp>
        <div></div>
        <div>
          <p>INTERDISCIPLINARY</p>
          <small>News Upcoming-Events Presentation Press</small>
          <p>
            <span>Fine art</span> SHOWROOM
          </p>
        </div>
      </LogoComp>

      <HeroVideo>
        <div className="up blackout"></div>
        <video src={Herovideo} type="video/mp4" autoPlay muted loop />
        <div className="down blackout"></div>
      </HeroVideo>
      <Embrace>
        <h1>EMB&#x2022;RACE</h1>
        <h1>EMB&#x2022;RACE</h1>
      </Embrace>
    </HeroContainer>
  );
};

export default Hero;
