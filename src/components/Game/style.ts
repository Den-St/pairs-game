import styled, {keyframes} from "styled-components";

export const breatheAnimation = keyframes`
 0% { opacity: 0; }
 100% {  opacity: 1; }
`

export const GamePageContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  animation-name: ${breatheAnimation};
  animation-duration: 0.3s;
`;

export const Timer = styled.h1`
  font-size: 50px;
  font-family: Calibri;
`;

export const CardsContainer = styled.div`
  min-width: 200px;
  max-width: calc(189px * 4);
  gap: 25px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Back = styled.button`
  width: 240px;
  height: 70px;
  background-color: #8c63e3;
  color: black;
  font-family: Calibri;
  font-size: 18px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 10px;
  margin-top: 30px;
  outline: 1px solid black;
  cursor: pointer;
  &:hover{
    opacity: 0.9;
  }
`;

export const BackImg = styled.img`
  width: 48px;
  height: 48px;
  margin-left: 20px;
`;
