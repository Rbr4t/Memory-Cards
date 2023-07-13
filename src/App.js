import { useState } from "react";

import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Card from "./components/Card";

import './styles/General.css'

function App() {

  let [score, setScore] = useState(0)
  let [bestScore, setBestScore] = useState(0)
  let [clickedCards, setClickedCards] = useState([])
  
  const handleLogic = (data) => {

    setClickedCards(prev => [...prev, data])
    
    if(!clickedCards.includes(data)) {
      setScore(score + 1)
      if(score + 1 > bestScore ) {
        setBestScore(score + 1)
      }
    } else {
      setScore(0)
      setClickedCards([])
    }
  }

  return (
    <div className="document">
      <Navbar score={score} bestScore={bestScore}/>

      <Card selectedCard={handleLogic} />
      <Counter score={score} bestScore={bestScore}/>

    </div>
  );
}

export default App;
