import MemeCard from "./components/Meme";
import Counter from "./components/Counter";
import { useState } from "react";

function App() {

  let [score, setScore] = useState(0)
  let [bestScore, setBestScore] = useState(0)
  let [reset, setReset] = useState(false)

  const pullScore = (data) => {
    
    if(data.filter((e, i, a) => a.indexOf(e) !== i).length === 0) {
      
      setScore(data.length)
      if(data.length > bestScore) {
        setBestScore(data.length)
      }
    } else {
      // todo: use localStorage to save the result
      setReset(true)
      setScore(0)
    }
  };

  return (
    <div>
      <h1>This is a memory game lol</h1>
      {!reset ? <MemeCard func={pullScore} reset={reset}/> : setReset(false)}
      <Counter score={score} bestScore={bestScore}/>
    </div>
  );
}

export default App;
