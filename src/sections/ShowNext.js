import styled from "styled-components";

const ShowNextContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgLight};
`;

const InnerContainer = styled.div`
  width: 80vw;
  min-height: 100vh;
  margin: auto;
  background-color: red;
`;

const contents = [
  {
    title: "",
    artist: "",
    artistUrl: "",
    overview: "",
    statement: "",
    imgUrl: {},
  },
];

const ShowNext = () => {
  return (
    <ShowNextContainer>
      <InnerContainer></InnerContainer>
    </ShowNextContainer>
  );
};

export default ShowNext;
