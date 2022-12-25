import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding-top: 30vh;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
`;

const TextContainer = styled.div`
  height: 60vh;
  width: 25vw;
  position: relative;
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow: visible;
  font-family: ${(props) => props.theme.fontD};
  /* background-color: #fff; */
  h1 {
    font-family: ${(props) => props.theme.fontB};
    font-size: 8rem;
    white-space: nowrap;
    /* align-self: flex-end;
    position: relative;
    right: -50%; */
    position: absolute;
    bottom: 6vh;
  }
  h3 {
    font-size: 1.5rem;

    span {
      white-space: nowrap;
    }
  }

  p {
    font-size: 1rem;
  }
`;
const ImageContainer = styled.div`
  height: 80vh;
  width: 35vw;
  background: center/cover no-repeat ${(props) => `url(${props.imgUrl})`};
`;

const RollingSlice = (props) => {
  const { title, artist, overview, dimensions, statement, imgUrl } =
    props.content;
  return (
    <Container>
      <TextContainer>
        <h3>
          <span>{dimensions}</span> <br /> {overview}
        </h3>
        <p>{statement}</p>
        <h2>by {artist}</h2>
        <h1>{title}</h1>
      </TextContainer>
      <ImageContainer imgUrl={imgUrl} />
    </Container>
  );
};

export default RollingSlice;
