import styled from "styled-components";
import thumbnail from "../src/Images/thumbnail.png";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

`;
const Wrapper = styled.div`
  display: flex;
  height: 70vh;
  width: 60vw;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 1100px) {
    flex-direction: column;
  
  } 
`;
const Thumbnails = styled.div`
  flex: 1;
  height: 80%;
  margin: 10px;
  background-color: #6cb4ee;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 15px;

  @media only screen and (max-width: 1100px) {
      width: 50%;
  }   
`;
const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  color: white;
  width: 70%;
`;
const TbImg = styled.img`
  width: 80%;
  height: 50%;
`;
const Btn = styled.button`
  background-color: #7fffd4;
  text-align: center;
  padding: 10px;
  border: none;
  border-radius: 20px;
  width: 75%;
  font-size: large;
`;
const Titles = styled.div`
  flex: 1;
  height: 80%;
  margin: 10px;
  padding: 15px;
  background-color: #6cb4ee;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    width: 50%;
    height: 100%;
  } 
`;
const TextCon = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  color: black;
  height: 60%;
  width: 100%;
  font-size: 18px;
  @media only screen and (max-width: 1100px) {
    margin: 10px;
  } 
`;
const TText = styled.p`
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  @media only screen and (max-width: 1100px) {
    padding: 8px 0;
  } 
`;
const Descriptions = styled.div`
  flex: 1;
  height: 80%;
  margin: 10px;
  background-color: #6cb4ee;
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: space-around;
  align-items: center;
  @media only screen and (max-width: 1100px) {
    width: 50%;
  } 
`;
const Desc = styled.div`
  height: 60%;
  width: 70%;
  @media only screen and (max-width: 1100px) {
    margin: 10px;
  } 
`;
const DescP = styled.span`
  font-size: 1.2vw;
  text-align: center;
  padding: 5px;
  font-weight: 400;
 
`;

function App() {
  return (
    <Container>
      <Wrapper>
        <Thumbnails>
          <Title>Thumbnails</Title>
          <TbImg src={thumbnail} alt="thumbnail Here"></TbImg>
          <Btn>Get Thumbnails</Btn>
        </Thumbnails>
        <Titles>
          <Title>Titles</Title>
          <TextCon>
            <TText>Some title for a Youtube Video</TText>
            <TText>Some title for a Youtube Video</TText>
            <TText>Some title for a Youtube Video</TText>
            <TText>Some title for a Youtube Video</TText>
            <TText>Some title for a Youtube Video</TText>
          </TextCon>
          <Btn>Get Titles</Btn>
        </Titles>
        <Titles>
          <Title>Titles</Title>
          <TextCon>
            <TText>Some title for a Youtube Video</TText>
            <TText>Some title for a Youtube Video</TText>
            <TText>Some title for a Youtube Video</TText>
            <TText>Some title for a Youtube Video</TText>
            <TText>Some title for a Youtube Video</TText>
          </TextCon>
          <Btn>Get Titles</Btn>
        </Titles>
        <Descriptions>
          <Title>Description</Title>
          <Desc>
            <DescP>
              Lorem Ipsunum, This just a description for a youtube vidoe on how
              not to die when you jump off a click because mehn it can be deadly
              on God! well enhou the viddeo Drop a like and comment Thnaks
            </DescP>
          </Desc>
          <Btn>Get Description</Btn>
        </Descriptions>
      </Wrapper>
    </Container>
  );
}

export default App;
