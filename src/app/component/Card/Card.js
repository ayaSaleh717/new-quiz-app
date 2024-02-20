"use client";
import React from "react";
import { Link } from "next/link";
import { useState } from "react";
import './card.module.css'

function Card(props) {
  
  ////////////////////////////////
  const [items, setItems] = useState(Menu) 
  const filterItem = (categoryItem) => {
    const updateItem = Menu.filter((curElem) =>{
      return curElem.category===categoryItem
    })
  setItems(updateItem);
  }
  ////////////////////////////////////////////////////////////////


  const [difficulty, setDifficulty] = useState("");
  const [amount, setAmount] = useState(10); // Default amount
  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(Number(event.target.value));
  };

  return (
    <>
      <img src={props.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">type {props.type}</p>
        <p className="card-text">difficulty {props.difficulty}</p>
        <p className="card-text">number of quistions {props.quistions}</p>
      </div>
      {/* <buttom
        class="btn btn-primary"
        onClick={() => {
          window.prompt(
            <select multiple>
              <option>Easy</option>
              <option>Medium</option>
              <option>Difficult</option>
            </select>
          );
        }}
      >
        Start Quiz
      </buttom> */}
    </>
  );
}

export default Card;
