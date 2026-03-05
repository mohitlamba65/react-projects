import { useState } from "react"
import { useTodo } from "../context";

function TodoForm(){
    const [todo, setTodo]=useState("");
    const {addTodo} = useTodo();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!todo) return
        addTodo({todo, completed:false})
        setTodo("")
    }
    return(
        <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50`}>
            <form onSubmit={handleSubmit} className="flex">
                <input 
                type="text"
                placeholder="Add Task"
                value={todo}
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>setTodo(e.target.value)}
                />
                <button type="submit" className="bg-green-600 text-white px-4 py-1.5 rounded-r-lg hover:bg-green-700 transition-colors duration-150 shrink-0">Add</button>
            </form>
        </div>
    )
}

export default TodoForm;