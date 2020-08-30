import React from "react";
import "./styles.css";
import Buttons from './buttons'

export default function App() {

  let myColor = ['red','green','blue','yellow']
  return (

    <div className="row">
    
      {myColor.map((colour,index)=>{
        return(
        <Buttons colour={colour} key={index}/>
        )
      })}
      
    </div>
  );
}
