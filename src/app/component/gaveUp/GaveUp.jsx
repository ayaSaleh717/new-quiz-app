import React from 'react'
import './gave.css'
import Link from 'next/link'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function GaveUp() {
  return (
    <div className='container'>
    <div className='go-container'>
    <h1 className='go-title'>Game Over</h1>
    <div className='category-details' >
        <h3>Category: <span style={{color:'#ffbe00'}}>General Knowledge</span></h3>
        <h3>Difficulty: <span style={{color:'#ffbe00'}}>Easy</span></h3>
        <h3>Number of Questions: <span style={{color:'#ffbe00'}}>10</span></h3>
        <h3>State: <span style={{color:'#ffbe00'}}>Given Up</span></h3>

    
    </div>
    <div className='question-details'>

        <h3><FontAwesomeIcon icon={faArrowRight} /> Score: <span >6%</span> </h3>
        <h3><FontAwesomeIcon icon={faArrowRight} /> Number of correct answers: <span style={{color:'green'}}>6</span></h3>
        <h3> <FontAwesomeIcon icon={faArrowRight} /> Number of uncorrect answers: <span style={{color:'red'}}>5</span></h3>

    </div>
    <div className='btns'>
        <button className='btn'>Try again</button>
        <Link href='/categorys'>        <button className='btn'> Main page</button>
</Link>

    </div>
    </div>
      
    </div>
  )
}

export default GaveUp
