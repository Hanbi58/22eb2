import styled from "styled-components";
import RollingSlice from "../components/RollingSlice";
import { contents } from "../assets";
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

const ShowNext = () => {
  return (
    <ShowNextContainer>
      <InnerContainer>
        {contents.map((content, idx) => (
          <RollingSlice content={content} key={idx} />
        ))}
      </InnerContainer>
    </ShowNextContainer>
  );
};

export default ShowNext;
