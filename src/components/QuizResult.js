import React from 'react'

function QuizResult(props) {
    const { totalScored, questionType } = props
    // props.setTotalScore((old) => ({
    //     ...old,
    //     [questionType]: {
    //         maxScore: totalScored[questionType]?.maxScore + 4,
    //         scored: totalScored[questionType]?.scored + props.totalScore
    //     }
    // }))
    return (
        <>
            <h1 style={{ marginTop: "50px" }}>Hi, {props?.name}</h1>
            <div className='show-score'>
                Your Score:{props.score}<br />
                Total Score:{props.totalScore}
            </div>
            <button id="next-button" onClick={props.tryAgain}>Try Again</button>
            {/* <div> */}
            <button id='nextNew' onClick={() => {
                props.setIsGameStarted(false)
                props.setShowResult(false)
                props.setCurrentQuestion(0)
                props.setScore(0)
            }}>Go to Home</button>
            {/* </div> */}
        </>
    )
}

export default QuizResult