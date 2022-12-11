import styled from "styled-components";
import Herovideo from "../assets/hero/Hero_Video_clip.mp4";

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
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroVideo>
        <video src={Herovideo} type="video/mp4" autoPlay muted loop />
      </HeroVideo>
    </HeroContainer>
  );
};

export default Hero;
