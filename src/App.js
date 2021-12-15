import { useState } from "react";
import Header from "./components/Header";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {

  const [ showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
    id:0,
    text: 'Food shopping',
    day: 'Feb 5th at 2:30pm',
    reminder: true,
    },
    {
      id:1,
      text: 'Doctors Appointment',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id:2,
      text: 'FMeeting at School',
      day: 'Feb 8th at 1:30pm',
      reminder: false,
    },
  ])

  const handleAddTask = (task) => {

    const id = Math.floor(Math.random()*10000+1)

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const handleDeleteTask =(id) => {
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
