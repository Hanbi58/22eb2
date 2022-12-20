import styled from "styled-components";

const ShowNextContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bgLight};
`;

const ShowNext = () => {
  return <ShowNextContainer>ShowNext</ShowNextContainer>;
};

export default ShowNext;
