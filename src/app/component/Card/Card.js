import React from 'react'
import { faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './card.css'
function Card(props) {
  return (
   
     <div className="work_card" key={props.id}    >
                      <div className="work_thumbnail">
                        <img src={props.img} alt="" className="work_img" />
                        <div className="work_mask"></div>
                      </div>

                      <span className="work_category">{props.title}</span>
                      <div className="work_title">
                        <h3 className="" style={{color:'#ffbe00'}}>{props.title}</h3>
                        <p className="" style={{}}><FontAwesomeIcon icon={faTurnUp} style={{color:"#ffbe00"}} /> Difficulty {props.difficulty}</p>
                        <p className=""> <FontAwesomeIcon icon={faQuestion} style={{color:'#ffbe00'}}/> Number of questions {props.question}</p>
                      </div>
                    </div>
      
  
  )
}

export default Card
