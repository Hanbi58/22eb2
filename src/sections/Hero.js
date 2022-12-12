import styled, { keyframes } from "styled-components";
import Herovideo from "../assets/hero/Hero_Video_clip.mp4";
import HeroLogo from "../assets/hero/HeroLogo2.svg";
const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
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
  width: 80%;
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

const Hero = () => {
  return (
    <HeroContainer>
      <div
        style={{
          background: `url(${HeroLogo}) center/cover`,
          width: "80px",
          height: "80px",
        }}
      ></div>
      <HeroVideo>
        <div className="up blackout"></div>
        <video src={Herovideo} type="video/mp4" autoPlay muted loop />
        <div className="down blackout"></div>
      </HeroVideo>
    </HeroContainer>
  );
};

export default Hero;
