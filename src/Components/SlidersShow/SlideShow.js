import React, { useEffect, useState } from "react";
import styled  from "styled-components";


const Container = styled.div`
  height: 99vh;
  width: 99.7vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid green;
  overflow-x: hidden;

`;
const Wrapper = styled.div`
  display: flex;
  height: 80%;
  width: 80%;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Slide = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;
const DivCon = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  animation: slide-animation 2s ease-in-out;
`;

const Left = styled.div`
  flex: 1;
  border: 2px solid red;
  height: 100%;
  text-align: center;

  animation: box1-animation 5s ease-in-out;
  @keyframes box1-animation {
    0% {
      transform: translateX(-200%);
    }

    50% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-200%);
    }
   
  }
`;
const Right = styled.div`
  border: 2px solid black;
  height: 100%;
  flex: 1;
  text-align: center;

  animation: box2-animation 5s ease-in-out;
  @keyframes box2-animation {
    0% {
      transform: translateX(200%);
    }

    50% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(200%);
    }
  }
`;

const SlideShow = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % 3);
    }, 5000);
    return () => clearInterval(id);
  }, [currentSlide]);
  console.log(slides);

  return (
    <Container>
      <Wrapper>
        <Slide style={{ display: currentSlide === 0 ? "block" : "none" }}>
          <DivCon>
            <Left style={{ backgroundColor: "red" }}>slide 1</Left>
            <Right style={{ backgroundColor: "yellow" }}>slide 2</Right>
          </DivCon>
        </Slide>
        <Slide style={{ display: currentSlide === 1 ? "block" : "none" }}>
          <DivCon>
            <Left style={{ backgroundColor: "blue" }}>slide 3</Left>
            <Right style={{ backgroundColor: "white" }}>slide 4</Right>
          </DivCon>
        </Slide>
        <Slide style={{ display: currentSlide === 2 ? "block" : "none" }}>
          <DivCon>
            <Left style={{ backgroundColor: "brown" }}>slide 5</Left>
            <Right style={{ backgroundColor: "pink" }}>slide 6</Right>
          </DivCon>
        </Slide>
      </Wrapper>
    </Container>
  );
};

export default SlideShow;
