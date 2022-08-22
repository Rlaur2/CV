import { FaTrash } from "react-icons/fa"
import './stylesheets/Tasks.css'

export const Tasks = ({editMode, value, index, taskIndex, handleTaskText, handleTaskSubmit, handleTaskDeletion, focusOn }) => {
  return (
    <div className="task">
        {editMode ? (<li><input 
                autoFocus={focusOn}
                className="output"
                type='text'
                value={value}
                onChange={(e) => handleTaskText(e, index, taskIndex)}
            /></li>) : (<li className="output">{value}</li>)}
            <button onClick={(e) => handleTaskSubmit(e, index, taskIndex)} className="task-submit">{editMode ? 'Submit' : 'Edit'}</button>
            {editMode ? <div onClick={() => handleTaskDeletion(index, taskIndex)} className="task-delete"><FaTrash /></div> : null}
    </div>
  )
}
