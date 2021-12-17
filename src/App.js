import React, { useState, useEffect } from "react";
import { BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Tasks";
import AddTask from "./components/AddTask";
import About from "./components/About";

const App = () => {

  const [ showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  
  useEffect(()=>{
    const getTasks = async () => {
      const taskFromServer = await fetchTasks()
      setTasks(taskFromServer)
    }

    getTasks()
  }, [])

  // Fetch tasks
  const fetchTasks = async () => {
    const response = await fetch('http://localhost:5000/tasks')
    const data = await response.json()

    return data
  }

  // Fetch single task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json()

    return data
  }

  const handleAddTask = async (task) => {

   const response = await fetch('http://localhost:5000/tasks',
    {
      method: 'POST',
      headers: {'Content-type' : 'application/json'},
      body: JSON.stringify(task)
    })

    const data = await response.json()
    setTasks([...tasks, data])
  }
  
  const handleDeleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    setTasks(tasks.filter( task => task.id !== id))
  }

  const handleMarkAsDone = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = {...taskToToggle, reminder: !taskToToggle.reminder}

    const response = await fetch(`http://localhost:5000/tasks/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask),
    })

    const data =  await response.json()

    setTasks(tasks.map( task => task.id === id ? {...task, reminder: data.reminder} : task ))
  }

  return (
    <Router>
      <div className="container">
        <Header 
          handleShowAddTask={()=>setShowAddTask(!showAddTask)} 
          showAddTask={showAddTask}
        />
        <Routes>
          <Route 
            path='/' 
            element={
              <React.Fragment>
                { 
                  showAddTask && 
                  <AddTask handleAddTask={handleAddTask}/> 
                }
                { 
                  tasks.length > 0 ? (
                  <Task 
                    tasks={tasks} 
                    handleDeleteTask={handleDeleteTask}
                    handleMarkAsDone={handleMarkAsDone}
                  />
                  ) :
                  "No tasks to show"
                }
              </React.Fragment>
            }
          />
          <Route path='/about' element={<About />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
