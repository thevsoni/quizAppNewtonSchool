import React, { useState } from 'react'
import { QuizDataJava, QuizDataJavaScript, QuizDataReact } from '../data/quizData'
import QuizResult from './QuizResult';
function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [clickedOption, setClickedOption] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [questionSet, setQuestionSet] = useState();
    const [formData, setFormData] = useState({
        name: "",
        questionType: ""
    })
    const [dark, setDark] = useState(false);

    const changeQuestion = () => {
        updateScore();
        if (currentQuestion < QuizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setClickedOption(0);
        } else {
            setShowResult(true)
        }
    }
    const updateScore = () => {
        if (clickedOption === QuizData[currentQuestion].answer) {
            setScore(score + 1);
        }
    }
    const resetAll = () => {
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }

    const btn = (e) => {
        e.preventDefault();
        setIsGameStarted(true)

    }

    const QuizData = formData?.questionType === "java" ? QuizDataJava : formData?.questionType === "javaScript" ? QuizDataJavaScript : QuizDataReact
    return (
        <div className='topParent' style={{ background: dark ? "#292929" : "white" }}>
            <div className='toggleParent'>
                <button className='btnLight' onClick={() => { setDark(false) }}>light</button>
                <button className='btnDark' onClick={() => { setDark(true) }}>Dark</button>
            </div>
            <div className='bodyContainer' style={{ background: dark ? "#292929" : "white" }}>
                <p className="heading-txt" style={{ color: dark ? "#985efe" : "green" }}>The Quiz APP</p>

                <div className="container" style={{ minHeight: isGameStarted ? "400px" : "250px", background: dark ? "#6100ed" : "white" }}>

                    {!isGameStarted
                        ?
                        <>
                            <h1>Welcome To theQuiz</h1>
                            <form onSubmit={btn} style={{
                                display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
                                width: "100%", flex: 1
                            }}>
                                <div className='fieldParent'>
                                    <input required type='text' placeholder='Enter Your Name' name='name' value={formData?.name} onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            name: e.target.value
                                        })
                                    }}
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            borderRadius: "5px",
                                            // border: "1px solid blue",
                                            outline: "none",
                                            fontSize: "medium",
                                            fontWeight: "bold",
                                            color: dark ? "#985efe" : "black",
                                            background: dark ? "#292929" : "white"
                                        }}
                                    />
                                </div>
                                <div className='fieldParent'>
                                    <select required placeholder='Enter Question Type' name='questionType' value={formData.questionType} onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            questionType: e.target.value
                                        })
                                    }}
                                        style={{
                                            width: "100%",
                                            padding: "10px",
                                            borderRadius: "5px",
                                            // border: "1px solid blue",
                                            outline: "none",
                                            color: dark ? "#985efe" : "black",
                                            fontSize: "medium",
                                            fontWeight: "bold",
                                            background: dark ? "#292929" : "white"
                                        }}
                                    >
                                        <option value="">choose Question Type</option>
                                        <option value="java">Java</option>
                                        <option value="javaScript">JavaScript</option>
                                        <option value="react">React</option>
                                    </select>
                                </div>
                                <button className='fieldParent' type='submit' style={{ width: "30%", borderRadius: "5px", background: "green", cursor: "pointer" }}>Start Test</button>
                            </form>
                        </>
                        :
                        showResult ? (
                            <QuizResult name={formData?.name} score={score} totalScore={QuizData.length} setScore={setScore} tryAgain={resetAll} setIsGameStarted={setIsGameStarted} setCurrentQuestion={setCurrentQuestion} setShowResult={setShowResult} />
                        ) : (
                            <>
                                <div className="question">
                                    <span id="question-number">{currentQuestion + 1}.&nbsp;</span>
                                    <span id="question-txt">{QuizData[currentQuestion].question}</span>
                                </div>
                                <div className="option-container">
                                    {QuizData[currentQuestion].options.map((option, i) => {
                                        return (
                                            <button
                                                // className="option-btn"
                                                className={`option-btn ${clickedOption == i + 1 ? "checked" : null
                                                    }`}
                                                key={i}
                                                onClick={() => setClickedOption(i + 1)}
                                                style={{
                                                    color: dark ? "#dcb2ff" : "black",
                                                    background: dark ? "#292929" : "white",
                                                    cursor: "pointer"
                                                }}
                                            >
                                                {option}
                                            </button>
                                        )
                                    })}
                                </div>
                                <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
                            </>)}
                </div>
            </div>
        </div>
    )
}

export default Quiz