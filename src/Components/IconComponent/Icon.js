import React, { useState } from "react";
import styled from "styled-components";
import { BsArrow90DegRight } from "react-icons/bs";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconCon = styled.div`
  width: 80px;
  height: 80px;
  background-color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: relative;
`;
const IconArrow = styled(BsArrow90DegRight)`
  font-size: 40px;
  position: absolute;
  
  &:hover{
    scale: 1.2;
    transition: 0.5s all ease-in-out;
  }
`;
const Text = styled.div`
    position: absolute;
    top:    -50%;
    width: 200px;
    text-align: center;
    border: 2px solid blue;
    border-radius: 20px;
    
`

const Icon = () => {
    const [hidden, setHidden] = useState(false)

    const handleText = () =>{
        setHidden(true)
        setTimeout(()=>{
            setHidden(false)
        }, 3000)
    }

  return (
    <Container>
      <IconCon>
         {hidden && <Text>Hello! have a great day</Text>}
        <IconArrow onClick={handleText}/>
      </IconCon>
    </Container>
  );
};

export default Icon;
