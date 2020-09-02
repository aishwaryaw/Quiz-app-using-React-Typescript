import { shuffleArray } from './util';

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export type Question = {
    category : string,
    question : string;
    correct_answer : string;
    incorrect_answers : string[];
    difficulty : string;
    type:string;
}

export type QuestionState = Question & {answers : string[] };

export const fetchQuestions = async(amount:number, difficulty : Difficulty) : Promise<QuestionState[]>  =>{
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const data = await (await fetch(endpoint)).json();
    // console.log(data)
    return data.results.map(
        (question : Question) => ({
            ...question,
            answers : shuffleArray([... question.incorrect_answers, question.correct_answer])
        })
    );
}

// data :
// results: Array(10)
// 0:
// category: "Entertainment: Board Games"
// correct_answer: "Carcassonne"
// difficulty: "easy"
// incorrect_answers: (3) ["Paris", "Marseille", "Clermont-Ferrand"]
// question: "Carcassonne is based on which French town?"
// type: "multiple"