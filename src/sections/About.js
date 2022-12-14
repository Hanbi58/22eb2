import styled from "styled-components";

const AboutContainer = styled.section`
  min-height: 100vh;
  width: 80vw;
  margin: auto;
  color: white;
  overflow: hidden;
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
  span:nth-of-type(1) {
    color: ${(props) => props.theme.orange};
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <p>About</p>
      <BigText>
        <h1 data-scroll data-scroll-speed="3">
          Our
          <span> Mission</span>
          <br />
          <span>is to Spread</span>
        </h1>
      </BigText>
    </AboutContainer>
  );
};

export default About;
