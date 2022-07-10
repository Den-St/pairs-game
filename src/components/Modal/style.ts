import styled from "styled-components";
import {breatheAnimation} from "../Home/style";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: rgba(9, 7, 7, 0.5);
  animation-name: ${breatheAnimation};
  animation-duration: 0.7s;
`;

export const ModalWrapper = styled.div`
  width: 520px;
  height: 170px;
  display: flex;
  flex-direction: column;
  background-color: #2121b0;
  color: white;
  border-radius: 20px;
  padding: 20px;
`;

export const Result = styled.h1<{$isWin?: boolean}>`
  text-align: center;
  font-weight: bolder;
  text-transform: uppercase;
  color: ${({$isWin}) => $isWin ? `#35d210` : `red`};
  font-family: Calibri;
  font-size: 40px;
  padding: 0;
  margin:10px 0 25px 0;
`;

export const Buttons = styled.div`
  width: 500px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
`;

export const PlayAgain = styled.button`
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

export const AgainImg = styled.img`
  width: 48px;
  height: 48px;
`;