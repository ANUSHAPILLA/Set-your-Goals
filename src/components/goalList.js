import React from "react";
import "./goalList.css"
import GoalItem from "./goalItem";

const GoalList=(props)=>{
const deleteItems=(event)=>{
    event.preventDefault()
    props.onDeleting(props.goal_name,props.keyid)
    
}
    
 return (
   <div className="buttondiv">
    
     <button onClick={deleteItems} className="buttonin">{props.goal_name}</button>
   </div>
    
 );
    
}
export default GoalList