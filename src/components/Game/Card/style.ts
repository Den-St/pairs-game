import styled from "styled-components";

export const CardItemContainer = styled.div<{$successTurned:boolean,$isTurning:boolean}>`
  width: 170px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({$successTurned}) => $successTurned ? `green` : `transparent`};
  border-radius: 5px;
  perspective: 1000px;
`;

export const SuccessCardItemContainer = styled.div`
  width: 170px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  perspective: 1000px;
  background-color: transparent;
`;

export const CardWrapper = styled.div<{$isTurning:boolean}>`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d; 
  ${({$isTurning}) => $isTurning && `transform: rotateY(180deg);`}
`;

export const CardBack = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: #00ffb2;
  color: black;
  font-weight: bolder;
  font-size: 30px;
  font-family: Calibri;
  cursor: pointer;
  transition: 0.2s;
  &:hover{
    opacity: 0.9;
  }
  position: absolute;
  backface-visibility: hidden;
`;

export const CardFront = styled.div<{$successTurned:boolean,$isTurning?:boolean}>`
  background-color: ${({$successTurned}) => $successTurned ? `green` : `black`};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  backface-visibility: hidden;
  position: absolute;
  transform: rotateY(180deg);
`;

export const CardImg = styled.img`
  width: 160px;
  height: 210px;
  object-fit: cover;
`;


export const SuccessCard =  styled.div`
  background-color: green;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;