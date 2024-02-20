"use client"
import React from 'react'
import { useState } from 'react';

function Details() {
  const [data, setData] = useState([]);
  const [difficulty, setDifficulty] = useState('');
  const [amount, setAmount] = useState(10);



  const handleDifficultyChange = (event) => {
   setDifficulty(event.target.value) 
    console.log(difficulty);
  };

  const handleAmountChange = (event) => {
   setAmount(Number(event.target.value)) ;
   console.log(amount);
  };

  return (
    <div>
    <div>
      <label>
        Difficulty Level:
        </label>
      <select onChange={handleDifficultyChange} >
              <option value="easy" >Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            </div>
            <div>
            <label>
            Amount of Questions
        </label>
      <select onChange={handleAmountChange} >
              <option value="8" >8</option>
              <option value="10">10</option>
              <option value="12">12</option>
            </select>
            </div>
            {/* <Link href="/quiz" >Start Quiz</Link>
            <Link href="/" >Cancel</Link> */}
    </div>
  )
}

export default Details
