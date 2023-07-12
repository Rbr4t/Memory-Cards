import arrayShuffle from "array-shuffle";
import { useState } from "react";

// fs doesn't work with the newest React, so gotta do it manually :)
import sus1 from "../characters/1 - aPvQWSf.png"
import sus2 from "../characters/2 - qhfNNjT.png"
import sus3 from "../characters/3 - VSYbpuA.png"
import sus4 from "../characters/4 - M4y5thc.png"
import sus5 from "../characters/5 - K6yaVXc.png"
import sus6 from "../characters/6 - XH3KEsd.png"
import sus7 from "../characters/7 - o0Jc3H6.png"
import sus8 from "../characters/8 - Wus3P0I.png"
import sus9 from "../characters/9 - QspM5Bv.png"
import sus10 from "../characters/10 - 5M7BgEN.png"
import sus11 from "../characters/11 - 882ekxi.png"
import sus12 from "../characters/12 - c60YSyH.png"

const images = [
    {"value": 1, "pic": sus1},
    {"value": 2, "pic": sus2},
    {"value": 3, "pic": sus3},
    {"value": 4, "pic": sus4},
    {"value": 5, "pic": sus5},
    {"value": 6, "pic": sus6},
    {"value": 7, "pic": sus7},
    {"value": 8, "pic": sus8},
    {"value": 9, "pic": sus9},
    {"value": 10, "pic": sus10},
    {"value": 11, "pic": sus11},
    {"value": 12, "pic": sus12},
]

function Card(props) {
    let [cards, setCards] = useState(images)

    const shuffle = () => setCards(arrayShuffle(cards))

    const handleCard = (e) => {
        props.selectedCard(e.currentTarget.value)
        shuffle()
    }

    return (
        <div>
            {cards.map((obj, i) => {
                return (
                <button className="card" value={obj.value} key={i} onClick={(e) => handleCard(e)}>
                    <img src={obj.pic} height="100"></img>
                </button>
                )
                
            })}
        </div>
    )
    
}

export default Card;