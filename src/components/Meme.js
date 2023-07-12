let memes = []

function getRandomMeme() {

}

function MemeCard() {
    {memes.map((m, i) => {
        <img src={m} id={i}></img>
    })}
}

export default MemeCard;