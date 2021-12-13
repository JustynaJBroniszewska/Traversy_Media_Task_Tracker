import {FaTimes} from 'react-icons/fa'
import PropTypes from 'prop-types'

const Task = ({ handleMarkAsDone, handleDeleteTask, task}) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} 
             onDoubleClick={() => handleMarkAsDone(task.id)}>
            <h3>{task.text} 
                <FaTimes onClick={() => handleDeleteTask(task.id)}/>
            </h3>
            <h4>{task.day}</h4>
        </div>
    )
}

Task.propTypes = {
    text : PropTypes.string,
}

export default Task

