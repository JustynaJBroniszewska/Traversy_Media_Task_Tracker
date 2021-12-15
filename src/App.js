import { useState, useEffect } from "react";
import Header from "./components/Header";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {

  const [ showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  
  useEffect(()=>{

    const getTasks = async () => {
      const taskFromServer = await fetchTask()
      setTasks(taskFromServer)
    }

    getTasks()
  }, [])

  const fetchTask = async () => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()

    return data
  }

  const handleAddTask = (task) => {

    const id = Math.floor(Math.random()*10000+1)

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const handleDeleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})

    setTasks(tasks.filter( task => task.id !== id))
  }

  const handleMarkAsDone = (id) => {
    setTasks(tasks.map( task => task.id === id ? {...task, reminder: !task.reminder} : task ))
  }

  return (
    <div className="container">
      <Header 
        handleShowAddTask={()=>setShowAddTask(!showAddTask)} 
        showAddTask={showAddTask}
      />
      { 
        showAddTask && 
        <AddTask handleAddTask={handleAddTask}/> 
      }
      { 
        tasks.length === 0 ? "No tasks to show" :
        <Task 
          tasks={tasks} 
          handleDeleteTask={handleDeleteTask}
          handleMarkAsDone={handleMarkAsDone}
        />
      }
    </div>
  );
}

export default App;
