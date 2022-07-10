import React from "react";
import {LevelContainer, PlayButton} from "./style";

type LevelProps = {
    id: number,
    time: number,
    numberOfCards: number,
    setLevel: (lvl: number) => void;
}


export const Level: React.FC<LevelProps> = ({id,time,numberOfCards,setLevel}) =>{
    return <LevelContainer>
        <span>Lvl. {id}</span>
        <span>{time} sec.</span>
        <span>{numberOfCards} cards</span>
        <PlayButton onClick={() => setLevel(id)}>Play</PlayButton>
    </LevelContainer>
}