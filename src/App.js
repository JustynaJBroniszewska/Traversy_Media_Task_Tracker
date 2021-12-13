import { useState } from "react";
import Header from "./components/Header";
import Task from "./components/Tasks";

const App = () => {

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

  const handleDeleteTask =(id) => {
    setTasks(tasks.filter( task => task.id !== id))
  }


  const handleMarkAsDone = (id) => {
    setTasks(tasks.map( task => task.id === id ? {...task, reminder: !task.reminder} : task ))
  }

  return (
    <div className="container">
      <Header />
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
