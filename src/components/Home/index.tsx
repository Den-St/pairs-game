import React from "react";
import {Header, HomePageWrapper, MenuContainer} from "./style";
import {Level} from "./Level";
import {levels} from "../levels";

type HomePageProps = {
    setLevel:(lvl:number) => void,
}

export const HomePage:React.FC<HomePageProps> = ({setLevel}) =>{
    return <HomePageWrapper>
        <Header>PAIRS</Header>
        <MenuContainer>
            {levels.map(el => <Level setLevel={setLevel} {...el}/>)}
        </MenuContainer>
    </HomePageWrapper>
}