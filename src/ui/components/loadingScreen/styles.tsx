import styled from "styled-components";




const container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1000;
`;

const circle = styled.div`
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  display: flex;
  height: 80px;
  margin: auto;
  padding-left: 18px;
  width: 80px;
  box-shadow: 0px 0px 10px black;
`



export const CSS = {
  container,
  circle 
}



