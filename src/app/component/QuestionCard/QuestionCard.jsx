import React from 'react'
import { useState,useEffect } from 'react'




function QuestionCard(props) {
  const [question, setQuestion] = useState('')
  const [answers, setAnswers] = useState([])
  const [userAnswer, setUserAnswer] = useState('')
  const [questionNr, setQuestionNr] = useState(0)
  const [totalQuestion, setTotalQuestionNr] = useState(0)
  const difficulty = props.difficulty
  const amount = props.amount


//fetching quize data
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
    // console.log(data)
  }, []);


  return (
    <div>
   <h1> Quistion Card</h1>
   <div >
    <h3>Quistion:{questionNr} / {totalQuestion} </h3>
    <div>
        {answers.map((answer) => {
            return(
                <div>
                    <buttom onClick={()=>{setUserAnswer(answer.current)}} ></buttom>
                </div>
            )
        }

)

        }
           
         
    </div>
   </div>
   
      
    </div>
  )
}

export default QuestionCard
