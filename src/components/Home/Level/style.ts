import styled from "styled-components";


export const LevelContainer = styled.div`
  width: 304px;
  height: 404px;
  color: white;
  background-color: #423e3e;
  font-family: Calibri;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
  border-radius: 25px;
  transition: 0.3s;

  & > span {
    font-size: 30px;
    font-weight: bolder;
  }

  box-shadow: 0px 0px 15px 5px rgba(45, 45, 45, 0.7);
`;

export const PlayButton = styled.button`
  font-family: Calibri;
  border-radius: 5px;
  background-color: #5cc55c;
  box-shadow: 5px 5px #282626;
  width: 150px;
  height: 70px;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 30px;
  transition: 0.3s;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    background-color: #51ad51;
  }
  &:active{
    transform: translate(5px,5px);
    box-shadow: 0px 0px #423e3e;
  }
`;