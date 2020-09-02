import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionCard from './components/QuestionCard'
import { fetchQuestions, Difficulty, QuestionState} from './API';
import { type } from 'os';
import {Wrapper, GlobalStyle} from './App.styles';
// import styled , { createGlobalStyle } from 'styled-components';
// @ts/ignore

export type AnswerObj = {
  question : string;
  answer : string;
  correct : boolean;
  correctAnswer : string;
}

const totalQuestions = 3;

const App : React.FC = () => {

const [questions, setQuestions ] = useState<QuestionState[]>([]);
const [score , setScore ] = useState(0);
const [loading, setLoading] = useState(false);
const [gameOver , setGameOver] = useState(true);
const [userAnswers , setUserAnswers ] = useState<AnswerObj[]>([]);
const [number , setNumber ] = useState(0);
const [display, setDisplay] = useState(false);

const startTrivia = async() =>{
  setDisplay(false);
  setGameOver(false);
  setLoading(true);
  const newQuestions = await fetchQuestions(totalQuestions , Difficulty.EASY);
  console.log(newQuestions);
  setQuestions(newQuestions);
  setScore(0);
  setUserAnswers([]);
  setNumber(0);
  console.log(questions);
  setLoading(false);
}

const checkAnswer = (e:any) => {
  if(!gameOver){
  // user's answer
    const answerValue = e.currentTarget.value;
    // Check answer against correct answer 
    const correct = answerValue == questions[number].correct_answer;
    //add score if answer is correct
    if(correct){
      setScore(prev => prev + 1);
    }
    const ansobj : AnswerObj = {
      question : questions[number].question,
      answer : answerValue,
      correct : correct,
      correctAnswer : questions[number].correct_answer,
    }
    setUserAnswers(prev => [...prev , ansobj]);
 }
}

const nextQuestion = () => {
  // Move on to the next question if not the last question
  const nextQ = number + 1;
  if(nextQ === totalQuestions){
    setGameOver(true);
  }
  setNumber(nextQ);
}

const displayResults = () => {
    setDisplay(true);
}

  return (
    <>
    <GlobalStyle/>
    <Wrapper>
      <h1>Quiz</h1>
      { display &&  userAnswers.map(
        (ans) => {
          return (
          <div className="results" key = {ans.answer} >
          <p>Question - {ans.question}</p>
          <p>Ans you gave - {ans.answer}</p>
          <p>Correct Answer - {ans.correctAnswer}</p>
          </div>
          )
        }
      ) }
      { (display && userAnswers.length === totalQuestions) || gameOver  ?(<button className="start" onClick = {startTrivia} >Start</button>)
      : null }
       { !display && !gameOver && <p className="score">Score : {score} </p> }
      { !display && loading && <p>Questions loading...</p> }
      { !display && !gameOver && !loading && questions && <QuestionCard 
        questionNo = {number + 1}
        question = {questions[number].question}
        answers = {questions[number].answers}
        totalQuestions = {totalQuestions}
        callback = {checkAnswer}
        userAnswer = {userAnswers ? userAnswers[number] : undefined}
      /> }
      
    { (!display && !gameOver && !loading && userAnswers.length === number+1 && number + 1 !== totalQuestions) ?
     ( <button className="next" onClick = {nextQuestion}>Next</button> )
     : !display && number + 1 == totalQuestions && userAnswers.length === number+1 ?
     (<button className="next" onClick = {displayResults}>Shwo results</button> ) : null
    }
      
    </Wrapper>
    </>
  );
}

export default App;
