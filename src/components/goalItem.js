import React from "react";
const GoalItem=(props)=>{
  console.log(props.goal)
  return(
    <div>
      <h2>
        {props.goal}
      </h2>
    </div>

  )
}
export default GoalItem