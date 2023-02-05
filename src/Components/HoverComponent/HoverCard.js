import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardTop = styled.div`
  flex: 1;
  height: 50%;
  width: 100%;
  background-color: lightgreen;
  position: absolute;
  opacity: 0;
`;
const CardBottom = styled.div`
  flex: 1;
  height: 50%;
  width: 100%;
  border: 2px solid blue;
  display: flex;
  background-color: yellow;
  position: absolute;
  justify-content: center;
  align-items: center;
  opacity: 0;
  top: 100%;
`;
const CardFront = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: lightgreen;
  position: relative;
  z-index: 10;
  left: 0;
    &:hover ${CardTop}{
        top: 0;
        opacity: 1;
        filter: blur(8px);
    }
    
  &:hover ${CardBottom} {
    transition: 0.3s all ease-in-out;
    opacity: 1;
    background-color: darkgreen;
    top: 50%;
  }
`;


const Button = styled.button`
  padding: 10px;
`;
const HoverCard = () => {
  return (
    <Container>
      <CardFront>
        <CardTop />
        <CardBottom>
          <Button>Click Here!</Button>
        </CardBottom>
      </CardFront>
    </Container>
  );
};

export default HoverCard;
