import styled from "styled-components";

const AboutContainer = styled.section`
  /* min-height: 100vh; */
  width: 80vw;
  margin: auto;
  color: white;
  overflow: visible;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
`;

const BigText = styled.div`
  flex: 5;
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

const MidText = styled.div`
  flex: 1;
  align-self: flex-end;
`;

const BannerComponent = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  color: ${(props) => props.theme.orange};
  line-height: 1;

  span {
    color: transparent;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${(props) => props.theme.textLight};
  }
`;
const About = () => {
  return (
    <AboutContainer>
      <p>About</p>
      <TextContainer>
        <MidText>
          <BannerComponent
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-5"
          >
            <span>the</span> Beauty
          </BannerComponent>
          <BannerComponent
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-3"
          >
            <span>the</span> Truth
          </BannerComponent>
          <BannerComponent
            data-scroll
            data-scroll-direction="horizontal"
            data-scroll-speed="-1"
          >
            <span>the</span> Love
          </BannerComponent>
        </MidText>
        <BigText>
          <h1 data-scroll data-scroll-speed="2" data-scroll-delay="0.15">
            The
            <span> Mission</span>
          </h1>
          <h1
            data-scroll
            // data-scroll-speed="-1"
            className="disappear"
            data-scroll-class="appear"
            data-scroll-repeat="true"
            data-scroll-delay="0.6"
          >
            is to Spread
          </h1>
        </BigText>
      </TextContainer>
    </AboutContainer>
  );
};

export default About;
