import '../styles/Counter.css'

function Counter({ score, bestScore }) {
    if(score === 0 && bestScore === 0) {
        return (
            <div className='counter'>
                <div className='panel1'>
                    <h2>Get points by clicking on A but don't click on any more than once!</h2>

                </div>
            </div>
        )
    }

    return (
        <div className='counter'>
            <div className='panel2'>
                <h2>Current score</h2>
                <h2>Best score</h2>
                <p>{score}</p>
                <p>{bestScore < 12? bestScore: "You've beaten the sussy game"}</p>
            </div>
            
        </div>
    )
}

export default Counter;
