import arrayShuffle from "array-shuffle";
import { useEffect, useState } from "react";

function MemeCard(props) {
    let [cards, setCards] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
    let [clickedCards, setClickedCards] = useState([])

    const shuffle = () => setCards(arrayShuffle(cards))
    const handleCard = (e) => {
        console.log(e.target.value)
        setClickedCards(prev => [...prev, e.target.value])
        shuffle()
    }

    useEffect(() => {
        props.func(clickedCards)
    }, [clickedCards])


    return (
        <div>
            {cards.map((m, i) => {
                return <button value={m} key={i} onClick={(e) => handleCard(e)}>{m}</button>
            })}
        </div>
    )
    
}

export default MemeCard;