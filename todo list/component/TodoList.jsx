import { useState } from "react"

export default function TodoList(){

    const[task, setTask] =useState("");
    const [tasks, setTasks] = useState([]);
  

const addTask = ()=>{
    if(task.trim()==="") return;

    const updatedTasks = [...tasks, {
        id:Date.now(),
        text: task,
        completed: false
    }];
     
setTasks(updatedTasks);
setTask("");
};

const toggleTask = (id)=>{
    setTasks(
        tasks.map((item)=> item.id===id? {...item, completed:!item.completed} : item),
    );
};

const deleteTask = (id)=>{

setTasks(tasks.filter((item)=> item.id!==id));
};

return(
    <>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
        <div className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
<div>
    <h1 className="text-2xl font-bold text-gray-800 mb-2">My Todo List </h1>
    <p className="text-gray-500 mb-6">Keep track your daily tasks. </p>
   </div>
   <div className="flex gap-2 mb-5">
    <input type="text" name="" id="" value={task} placeholder="Enter a new task.." onChange={(e)=>{setTask(e.target.value)}} className="border border-gray-300 rounded-full px-3 py-2 outline-none focus:ring-2  focus:ring-blue-500"/>

    <button onClick={addTask} className="bg-slate-600 text-white px-6 py-2 rounded-full hover:bg-slate-800 ">Add</button>
   </div>

<ul>
    {
     tasks.map((item)=>(
        <li className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg" key={item.id}>
            <input type="checkbox" checked={item.completed} name="" id="" onChange={()=>toggleTask(item.id)}
            className="h-4 w-4 accent-blue-600" />
            <span className={`flex-1  ${item.completed?"line-through text-gray-400" : "text-gray-700"}`}>{item.text}</span>

<button onClick={()=>deleteTask(item.id)} className="text-red-500">Delete</button>

        </li>
     ))
    
    }
</ul>

        </div>

    </div>
   
    </>
)
}
