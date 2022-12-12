import styled from "styled-components";
import Herovideo from "../assets/hero/Hero_Video_clip.mp4";
import HeroLogo from "../assets/hero/HeroLogo.svg";
const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const HeroVideo = styled.div`
  position: relative;
  top: 200px;
  width: 80%;
  margin: auto;
  color: white;
  video {
    width: 100%;
    object-fit: cover;
  }

  .blackout {
    position: absolute;
    height: 500px;
    width: 100%;
    background-color: #0f1014;
    z-index: 1;
  }
  .up {
    top: 0;
    background-color: green;
  }
  .down {
    bottom: 0;
    background-color: red;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <div
        style={{
          background: `url(${HeroLogo}) center/cover`,
          width: "100px",
          height: "100px",
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
