import React, {useState} from 'react';
import {HomePage} from "./components/Home";
import {Normalize} from "styled-normalize";
import {GamePage} from "./components/Game";
import {Layout} from "./components/Home/style";


function App() {
  const [currentLevel,setCurrentLevel] = useState(0);
  const setLevel = (lvl:number) =>{
    setCurrentLevel(lvl);
  }
  return <Layout>{!currentLevel
      ? <HomePage setLevel={setLevel}/>
      : <GamePage setCurrentLevel={setCurrentLevel} currentLevel={currentLevel}/>}
  <Normalize/></Layout>
}

export default App;
