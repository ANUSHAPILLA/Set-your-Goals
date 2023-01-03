import React,{useState} from "react";
import "./goalInput.css"

const GoalInput=(props)=>{
  const [goalitem,setGoal]=useState("")
  const [help,setHelp]=useState(false)
  const goalinputupdating=(event)=>{
    setGoal(event.target.value)
  }
   

      const onHelp=(event)=>{
        event.preventDefault()
        props.updateGoal(goalitem)
        setGoal("")
      }
      
return (
  <div>
    <h2 className="heading">
      <i>Goals reminder!!!!</i>
    </h2>
    <div className="goalinput">
      <label>Type your goal:</label>

      <input className="input" value={goalitem} onChange={goalinputupdating}></input>
      <button  className="button" onClick={onHelp}>
        <text className="text">Add Goal</text></button>
    </div>
  </div>
);
}
export default GoalInput