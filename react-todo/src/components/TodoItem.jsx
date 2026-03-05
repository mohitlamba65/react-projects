import { useState } from "react";
import { useTodo } from "../context";

function TodoItem({todo}){
    const[isTodoEditable, setisTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const {updateTodo, deleteTodo, toggleComplete}= useTodo();

    const editTodo=()=>{
        updateTodo(todo.id,{...todo, todo: todoMsg})
        setisTodoEditable(false)
    }
    
    const toggleTodoComplete=()=>{
        toggleComplete(todo.id)
    }

    return(
        <div className={`border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 ${todo.completed? "bg-[#c6e9a7]":"bg-[#ccbed7]"} `}>
            <input 
            type="checkbox"
            checked={todo.completed}
            className="cursor-pointer"
            onChange={toggleTodoComplete}
             />

            <input
             type="text"
             value={todoMsg}
             className={`outline-none w-full bg-transparent rounded-lg ${
                isTodoEditable?"border-black/10 px-2":"border-transparent"
             } ${todo.completed?"line-through":""}`}
             onChange={(e)=>setTodoMsg(e.target.value)}
             readOnly={!isTodoEditable}
            />

            <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
            onClick={()=>{
                if(todo.completed) return;
                if(isTodoEditable){
                    editTodo();
                }
                else{
                    setisTodoEditable((prev)=>!prev);
                }
            }}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>

            <button 
            className="inline-flex w-8 h-8 border border-black/10 rounded-lg text-sm items-center justify-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={()=>{
                deleteTodo(todo.id)
            }}
            >
                🗑️
            </button>
        </div>
    )
}

export default TodoItem;