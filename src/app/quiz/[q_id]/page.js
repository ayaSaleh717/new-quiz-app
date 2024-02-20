"use client";
import React, { Suspense } from "react";
import { useState } from "react";
// import { fetchQuizQuestions } from "./API";

//Imported Components
import QuestionCard from "./../../component/QuestionCard/QuestionCard";

function QuizPage({ params }) {
  const Total_ = 10;
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // console.log(fetchQuizQuestions());

  const startTrivia = async () => {};

  const checkAnswer = (e) => {};

  const nextQuestion = () => {};

  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve();
  //   }, 2000);
  // });

  // const response = await fetch(
  //   'https://opentdb.com/api.php?amount=9&category=12&difficulty=medium&type=multiple',
  //   {
  //     next: {
  //       revalidate: 3000,
  //     },
  //   }
  // );

  // const gam = await response.json();
  // console.log(params);
  // console.log(gam);

  const loadJSX = (
    <div>
      <h2> Quize is starting ....</h2>
    </div>
  );

  return (
    <div>
      <h1>Quiz page</h1>
      <h3>Get Ready ... </h3>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <button>Cancel</button>
      <QuestionCard
        questionNr={number + 1}
        totalQuestion={Total_}
        // question={questions[number].question}
        // answers={questions[number].answers}
        userAnswer={userAnswer ? userAnswer[number] : undefined}
        callback={checkAnswer}
        amount={Total_}
        difficulty="medium"
      />

      {/* <Game params = {params} /> */}
      {/* <Suspense fallback={loadJSX}></Suspense> */}

      {/* {gam.results.map((i) =>{
      return (
        <p key={i.question}>{i.question}</p>
      )
    } )} */}
    </div>
  );
}

export default QuizPage;
