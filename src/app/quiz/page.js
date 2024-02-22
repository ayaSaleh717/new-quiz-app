import React from "react";
import "./quiz.css";

import Link from "next/link";
import Timer from "../component/timer/Timer";


function QuizPage() {
  return (
    <>
      <div className="container quizPage">
        <h1 className="h1-title">Quiz Page </h1>
        <hr></hr>
       <Timer />

        <div className="q-box">
          <div className="quistion">
            <div className="q-container">
              <div className="blur">
                <h2 className="q-question">
                  <span className="q-num">1</span>. What is your name?
                </h2>
              
                  <ul className="ul">
                    <li className="opt">Ali</li>
                    <li className="opt">Aya</li>
                    <li className="opt">Zahraa</li>
                    <li className="opt">Ahmad</li>
                  </ul>
                
                <div className="index">1 0f 10 Questions</div>
              </div>
            </div>
            <div className="btns">
              <button className="btn bb" style={{}}>
                next
              </button>
              <Link href="/gaveUp">
                <button className="btn bb" style={{}}>
                  Gave up
                </button>
              </Link>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizPage;
