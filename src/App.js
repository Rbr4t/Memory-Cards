import Card from "./components/Card";
import Counter from "./components/Counter";
import { useEffect, useState } from "react";

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
    <div>
      <h1>This is a memory game lol</h1>
      <Card selectedCard={handleLogic} />
      <Counter score={score} bestScore={bestScore}/>
    </div>
  );
}
  


export default App;
