import React from "react";
import Card from "../component/Card/Card";
import types from "./catygorys";
import "./cat.css";
import Link from "next/link";
import Shape from "./../component/Shape/Shape.jsx";

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
                <div className="" style={{flexWrap:'wrap'}} key={id}>
                
                  <Link href="/quiz" >
                  <Card  id={id} type={type} question={question} difficulty={difficulty} img={img} title={title} />
                   
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
