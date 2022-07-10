import React from "react";
import {
    CardBack,
    CardFront,
    CardImg,
    CardItemContainer,
    CardWrapper,
    SuccessCard,
    SuccessCardItemContainer
} from "./style";

type CardItemProps = {
    id:number,
    src:string
    setTurned: () => void,
    isTurned:boolean,
    successTurned:boolean,
    isTurning:boolean
}

export const CardItem:React.FC<CardItemProps> = ({id,src, setTurned,isTurned,successTurned,isTurning}) => {
    if(successTurned)
        return <SuccessCardItemContainer>
                <SuccessCard ><CardImg src={src}/></SuccessCard>
        </SuccessCardItemContainer>

    return <CardItemContainer $isTurning={isTurning} $successTurned={successTurned} onClick={setTurned}>
        <CardWrapper $isTurning={isTurning}>
            <CardBack>PICK</CardBack>
            <CardFront $successTurned={successTurned} $isTurning={isTurning}><CardImg src={src}/></CardFront>
        </CardWrapper>
    </CardItemContainer>
}