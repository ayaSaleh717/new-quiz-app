'use client'
import React from 'react'
import { useState } from 'react'
function BottonNext(props ){

    const [counter, setCounter] = useState(0)
    const handelNext = ()=>{
        setCounter(prev + 1)
        
    }
  return (
    <div>
     <button className="btn" style={{}} onClick={handelNext}>
                next
              </button>
      
    </div>
  )
}

export default BottonNext
