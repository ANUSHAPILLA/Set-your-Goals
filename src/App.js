import React ,{useState,useEffect} from "react";
import "./App.css"
import GoalInput from "./components/goalInput";
import GoalList from "./components/goalList";
const App =(props)=>{
  const [goalInput, setgoalInput] = useState([
    { id: 0, goal_in: "$$$Stay Fit$$$" },
    {id: 1, goal_in: "$$$Be Consciouus$$$"},
   ]);
  const addGoal=(goal)=>{
    
setgoalInput(prevGoal=>{
  const updateGoals=[...prevGoal,{goal_in:goal,id:Math.random()}]
  return updateGoals
  
})
  }
  const handleDeleting=(goalname,id)=>{
     setgoalInput((prevgoals)=>{
      
   const  ug= prevgoals.filter(prevG=>prevG.id!=id
        )
  return ug
     })

  }
return (
  <div>
    <div>
      <GoalInput updateGoal={addGoal} />
    </div>
    <div>
      
      {goalInput.map((item) => {
        if(item.goal_in.length>0){
        return (
          <GoalList onDeleting={handleDeleting} key={item.id} keyid={item.id} goal_name={item.goal_in} />
        );
 } })
    }
     </div>
  </div>
);

}
export default App