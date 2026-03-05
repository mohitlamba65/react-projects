import { useEffect, useState } from "react";
import { TodoProvider } from "./context";
import { TodoForm, TodoItem } from "./components";


function App() {
  const [tasks, setTasks] = useState([]);

  const addTodo=(todo)=>{
    setTasks((prev)=>[{id: Date.now(), ...todo},...prev])
  }

  const deleteTodo = (id) => {
    setTasks((prev) => prev.filter((item) => (item.id != id)));
  }

  const updateTodo = (id, todo) => {
    setTasks((prev) => prev.map((item) => (item.id === id ? todo : item)))
  }

  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((prevTodo) => (
        prevTodo.id == id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo
      ))
    )
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos) {
      setTasks(todos);
    }
  }, []);

  return (
    <TodoProvider value={{addTodo,deleteTodo, updateTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full text-white max-w-md mx-auto rounded-lg shadow-lg px-4 py-3">
          <h1 className="text-2xl font-bold text-center mb-8">Manage Your Tasks</h1>
          <div className="mb-4">
            <TodoForm/>
          </div>

          <div className="">
            {tasks.map((task)=>(
              <div key={task.id}
              className="w-full"
              >
                <TodoItem todo={task}/>
              </div>
            ))}
          </div>

        </div>
      </div>
    </TodoProvider>
  )
}

export default App;