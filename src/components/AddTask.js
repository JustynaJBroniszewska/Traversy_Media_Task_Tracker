import { useState } from 'react'

const AddTask = ({handleAddTask}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const handleOnSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert("Please add a task")
            return
        }

        handleAddTask({text, day, reminder})

        setText()
        setDay()
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={handleOnSubmit}>
            <div className='form-control'>
                <label htmlFor='add-task'>Task</label>
                <input type="text" id='add-task' placeholder='Add task...' value={text} onChange={(e)=>setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label htmlFor="day-time">Day & Time</label>
                <input type="text" id='day-time' placeholder='Add day & time...' value={day} onChange={(e)=>setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor='set-reminder'>Set reminder</label>
                <input type="checkbox" id='set-reminder' checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div> 
            <button type='submit' className='btn btn-block'>Save task</button>
        </form>
    )
}

export default AddTask
