import React from 'react'
import {AnswerObj} from '../App';
import {Wrapper, ButtonWrapper} from './QuestionCard.styles';

type props = {
    questionNo : number;
    question : string;
    answers : string[];
    totalQuestions : number;
    callback : (e:React.MouseEvent<HTMLButtonElement>) =>void;
    userAnswer : AnswerObj | any;
}
const QuestionCard : React.FC<props> = ({
    question,
    questionNo,
    answers,
    totalQuestions,
    userAnswer,
    callback
}) => {
    return (
        <Wrapper>
        <p>{questionNo}/{totalQuestions} </p>  
        <p>{question}</p>
        <div>
            {answers.map(ans => {
                return(
                <ButtonWrapper
                key = {ans}
                correct = {userAnswer?.correctAnswer == ans}
                userClicked = { userAnswer?.answer == ans }
                >
                <button
                disabled = { userAnswer ? true : false }
                value={ans} onClick = {callback}>{ans}</button>
                </ButtonWrapper>
                )
            })}
        </div>
        </Wrapper>
    )
}

export default QuestionCard
