import React from 'react'
import Task from './Task'

const Tasks = ({ handleMarkAsDone, handleDeleteTask, tasks}) => {

    return (
        <React.Fragment>
            {
                tasks.map( task => ( 
                    <Task 
                    key={task.id} 
                    task={task} 
                    handleDeleteTask={handleDeleteTask}
                    handleMarkAsDone={handleMarkAsDone}
                    /> 
                ))
            }
        </React.Fragment>
    )
}

export default Tasks
