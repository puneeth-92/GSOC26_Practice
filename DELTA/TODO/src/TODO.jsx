import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TODOLIST(){
    let [tasks,setTasks]=useState([{task:"Sample-task",id:uuidv4(),isDone:false}]);
    let [newTodo,setNewTodo]=useState("");

    function handleSubmit(){
        setTasks((prevTodos)=>{return[...prevTodos,{task:newTodo,id:uuidv4(),isDone:false}]});
        setNewTodo("");
    }

    function updateNew(event){
        setNewTodo(event.target.value);
    }

    function deleteTask(id){
        setTasks((prev) => prev.filter(todo => todo.id !== id));
        // console.log(copy);
    }

    function upper(){
        setTasks((prev)=>{
            return prev.map((todo)=>(
                {
                    ...todo,
                    task:todo.task.toUpperCase()
                }
            ))}
        )
    }

    function markDone(id){
        console.log(id);
        setTasks((prev)=>
            prev.map((todo)=>
                 todo.id===id?{ ...todo, isDone: !todo.isDone } : todo
            ))
    }
    return(
        <div>
            <h4>TODO</h4>
            <input type="text" placeholder="Enter new Task" value={newTodo} onChange={updateNew}/><br /><br />
            <button onClick={handleSubmit}>Submit</button><br />
            <h2>Tasks</h2>
            <ul>
            {tasks.map((t) => (
                <li key={t.id}>
                    {(t.isDone===true)?<span style={{textDecoration:"line-through"}}>{t.task}</span>:<span>{t.task}</span>}
                    &nbsp;&nbsp;
                    <button onClick={()=>deleteTask(t.id)}>Del</button>
                    &nbsp;&nbsp;
                    <button onClick={()=>markDone(t.id)}>{(t.isDone===true)?"Not Done":"Done"}</button>
                </li>
            ))}
            </ul>
            <button onClick={upper}>updateAll</button>
        </div>
    );
}