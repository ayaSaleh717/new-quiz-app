import React from "react";
import "./quiz.css";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function QuizPage() {
  return (
    <>
      <div className="container quizPage">
        <h1 className="h1-title">Quiz Page </h1>
        <hr></hr>
        <span>
          <FontAwesomeIcon icon={faClock} /> Timer 5:00
        </span>

        <div
          className=""
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="quistion">
            <div className="q-container">
              <div className="blur">
                <h2 className="q-question">
                  <span className="q-num">1</span>. What is your name?
                </h2>
                <div className="ul">
                  <ul>
                    <li className="opt">Ali</li>
                    <li className="opt">Aya</li>
                    <li className="opt">Zahraa</li>
                    <li className="opt">Ahmad</li>
                  </ul>
                </div>
                <div className="index">1 0f 10 Questions</div>
              </div>
            </div>
            <div className="btns">
              <button className="btn" style={{}}>
                next
              </button>
              <Link href="/categorys">
                <button className="btn" style={{}}>
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
