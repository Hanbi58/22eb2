import styled from "styled-components";

const Container = styled.div`
  position: relative;
  margin: auto;
  width: 80vw;
  min-height: 200vh;
  /* background-color: ${(props) => props.theme.bgLight}; */
`;

const ChameleonBg = styled.div`
  width: 100vw;
  min-height: 100vh;
  position: absolute;
  left: -10vw;
  background-color: ${(props) => props.theme.bgLight};
`;

const ChameleonInner = styled.div`
  width: 100%;
  height: 11vh;
  background-color: ${(props) => props.theme.bg};
`;

const Chameleon = () => {
  return (
    <Container>
      <ChameleonBg>
        <ChameleonInner />
        <ChameleonInner />
        <ChameleonInner />
        <ChameleonInner />
        <ChameleonInner />
        <ChameleonInner />
        <ChameleonInner />
        <ChameleonInner />
        <ChameleonInner />
        <ChameleonInner />
      </ChameleonBg>
    </Container>
  );
};

export default Chameleon;
