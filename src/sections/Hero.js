import React from "react";
import styled from "styled-components";
import HeroVideo from "../assets/hero/Hero_Video.MP4";

const HeroContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const VideoContainer = styled.div`
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
      <VideoContainer>
        <video src={HeroVideo} type="video/mp4" autoPlay muted loop />
      </VideoContainer>
    </HeroContainer>
  );
};

export default Hero;
