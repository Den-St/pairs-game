import React, {useEffect, useState} from "react";
import {Back, BackImg, CardsContainer, GamePageContainer, Timer} from "./style";
import {levels} from "../levels";
import {CardItem} from "./Card";
import {getRandomPictures, shuffle} from "../../helpers/common";
import {Modal} from "../Modal";

type GamePageProps = {
    currentLevel:number,
    setCurrentLevel:(lvl:number) => void
}


export const GamePage:React.FC<GamePageProps> = ({currentLevel,setCurrentLevel}) =>{
    const [seconds,setSeconds] = useState(levels[currentLevel - 1].time);
    const [levelCards,setLevelCards] = useState<{id:number,src:string}[]>([]);
    const [turned,setTurned] = useState<number[]>([]);//success turned ids
    const [turning,setTurning] = useState<number[]>([]);// array of indexes currently turning
    const [isChecking,setIsChecking] = useState(false);
    const [result,setResult] = useState('');

    const onTurn = (i:number) => () => {if(!turning.includes(i) && !isChecking)setTurning(prevState => [...prevState,i]);}
    const reset = () => {
        setTurning([]); setIsChecking(false)
    }
    const generateCards = () =>{
        const firstPartCards = getRandomPictures(levels[currentLevel - 1].numberOfCards/2);
        setLevelCards([...shuffle(firstPartCards),...shuffle(firstPartCards)]);
    }
    useEffect(() => {
        //setMinutes(`${Math.floor(levels[currentLevel - 1].time/60)}:${levels[currentLevel - 1].time - Math.floor(levels[currentLevel - 1].time/60)*60}`);
        generateCards();
    },[]);

    useEffect(() =>
        {
            if(turned.length === levels[currentLevel - 1].numberOfCards/2) {
                setResult('win')
            }
            if(turning.length === 2){
                setIsChecking(true)
                if(levelCards[turning[0]].id === levelCards[turning[1]].id){
                    setTurned(prevState => [...prevState,levelCards[turning[0]].id]);
                    reset();
                    return;
                }
                setTimeout(() => reset(),1000);
            }
        },
    [turning.length])

   const back = () =>{
        setCurrentLevel(0);
        reset();
        setTurned([]);
        setResult('');
    }
    const again = () =>{
        reset();
        setTurned([]);
        setResult('');
        generateCards();
        setSeconds(levels[currentLevel - 1].time);
    }

    useEffect(() => {
        if(!seconds){
            setResult('defeat');
        }
    }, [seconds])

    useEffect(() =>{
        let timer: NodeJS.Timer

        if(!result){timer = setInterval(()=>{setSeconds(prevState => {

            if(prevState === 0) return 0;
            return prevState - 1})
        },1000);}

        return () => timer && clearInterval(timer);
    },[result])



    return <GamePageContainer>
        {result && <Modal result={result} back={back} again={again}/>}
        <Timer>{seconds} sec.</Timer>
        <CardsContainer>{levelCards.map((el,i) => <CardItem
            id={el.id}
            src={el.src}
            isTurned={turned.includes(el.id) || turning.includes(i)}
            successTurned = {turned.includes(el.id)}
            isTurning = {turning.includes(i)}
            setTurned={onTurn(i)}/>)}
        </CardsContainer>
        <Back onClick={() => {setCurrentLevel(0);reset();setTurned([])}}>BACK TO MENU<BackImg src={'https://img.icons8.com/sf-regular-filled/96/reply-arrow.png'}/></Back>
    </GamePageContainer>
}