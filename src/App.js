import './App.css';
import Header from './components/Header';
import Card from './components/Card'
import { useState } from 'react';
import Scoreboard from './components/Scoreboard';

function App() {
  
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)

  return (

    <div className="App">
     <Header content = {'Memory Card Game'}/>
     <Scoreboard
      score = {score}
      bestScore = {bestScore}
     />
     <Card
      score = {score}
      setScore = {setScore}
      bestScore = {bestScore}
      setBestScore = {setBestScore}
     />
    </div>
  );
}

export default App;
