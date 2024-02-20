import React from "react";
import Card from "../component/Card/Card";
import types from "./catygorys";
import "./cat.css";
import Link from "next/link";
import Shape from "./../component/Shape/Shape.jsx";
import { faTurnUp } from "@fortawesome/free-solid-svg-icons";
import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
function CatigoryPage() {
  return (
    <div className="work container section">
      <div>
        <h1 className="h1-title">Categorys</h1>
        <hr/>
      </div>
      <div>
        <Shape />

        <div className="work_container grid">
        {/* <div className="card" style={{display:'flex'}}> */}
        
            {types.map((i) => {
              const { id, title, type, question, difficulty, img } = i;
              return (
                <div className=""nstyle={{flexWrap:'wrap'}}>
                
                  <Link href="/quiz" >
                    <div className="work_card" key={id}    >
                      <div className="work_thumbnail">
                        <img src={img} alt="" className="work_img" />
                        <div className="work_mask"></div>
                      </div>

                      <span className="work_category">{title}</span>
                      <div className="work_title">
                        <h3 className="" style={{color:'#ffbe00'}}>{title}</h3>
                        <p className="" style={{}}><FontAwesomeIcon icon={faTurnUp} style={{color:"#ffbe00"}} /> Difficulty {difficulty}</p>
                        <p className=""> <FontAwesomeIcon icon={faQuestion} style={{color:'#ffbe00'}}/> Number of questions {question}</p>
                      </div>
                    </div>
                  </Link></div>
               
              );
            })}
            {/* </div> */}
          
        </div>
      </div>
    </div>
  );
}

export default CatigoryPage;
