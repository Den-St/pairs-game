import React from "react";
import {Back, BackImg} from "../Game/style";
import {AgainImg, Buttons, ModalContainer, ModalWrapper, PlayAgain, Result} from "./style";

type ModalProps = {
    back:() => void;
    again:() => void;
    result:string
}

export const Modal:React.FC<ModalProps> =({result,back,again})=>{
    console.log(result);
    return <ModalContainer>
        <ModalWrapper>
            <Result $isWin={result === 'win'}>{result}</Result>
            <Buttons>
                <Back onClick={back}>BACK TO MENU<BackImg src={'https://img.icons8.com/sf-regular-filled/96/reply-arrow.png'}/></Back>
                <PlayAgain onClick={again}>PLAY AGAIN<AgainImg src={'https://img.icons8.com/sf-regular-filled/96/reply-arrow.png'}/></PlayAgain>
            </Buttons>
        </ModalWrapper>
    </ModalContainer>
}