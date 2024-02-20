import { useState } from "react";
// export type Question = {
//   category: string;
//   correct_answer: string;
//   difficulty: string;
//   incorrect_answers: string[];
//   question: string;
//   type: string;
// };

export const Difficulty= {
  EASY : "easy",
  MEDIUM : "medium",
  HARD : "hard",
}

const shuffleArray = (array) => 
[...array].sort(() => Math.random() - 0.5);

// export type QuestionsState = Question & { answers: string[] };

// export const fetchQuizQuestions = async () => {
//     const endpoint = 'https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple';
//     const data = await (await fetch(endpoint)).json();
//     return data.results.map((question) => ({
//       ...question,
//       answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
//     }));
//   };