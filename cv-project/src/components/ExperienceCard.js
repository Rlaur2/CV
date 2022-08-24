import './stylesheets/ExperienceCard.css'
import { FaTrashAlt } from 'react-icons/fa'
import { ExperienceInput } from './ExperienceInput'
import { FaPlus } from 'react-icons/fa'
import { Tasks } from './Tasks'

//Here we finally created one component "ExperienceInput" and re-used it multiple times, with the differences being handled by the different things passed(drilled) into it
export const ExperienceCard = ({index, company, title, start, end, ongoing, editMode, tasks, handleSubmit, handleTextEntry, handleDeletion, handleTaskText, handleTaskDeletion, handleTaskAdd, handleTaskSubmit, handleOngoing}) => {
  return (
      <div className='card'>
      <form className='experienceSection'>
        {/*Had to seperate this form from another form below since you can't have a nest a Form in another Form */}
          <div className='company-side'>
            <div className='complete-details'>
              <div className="details">Company:</div>
              <ExperienceInput 
                editMode={editMode}
                section={company}
                sectionString={'company'}
                index={index}
                handleTextEntry={handleTextEntry}
                focusOn={true}
              />
            </div>
            <div className='complete-details'>
              <div className="details">Title:</div>
              <ExperienceInput 
                editMode={editMode}
                section={title}
                sectionString={'title'}
                index={index}
                handleTextEntry={handleTextEntry}
                focusOn={false}
              />
            </div>
            <div className='complete-details'>
              <div className="details">Start:</div>
              <ExperienceInput 
                editMode={editMode}
                section={start}
                sectionString={'start'}
                index={index}
                handleTextEntry={handleTextEntry}
                focusOn={false}
              />
            </div>
            <div className='complete-details'>
              <div className="details">End:</div>
              <ExperienceInput 
                editMode={editMode}
                section={end}
                sectionString={'end'}
                index={index}
                handleTextEntry={handleTextEntry}
                focusOn={false}
                ongoing={ongoing}
              />
              {editMode ? 
              <div className='ongoing-check'>
                <label htmlFor='ongoing'>
                  Ongoing?
                </label>
              <input 
                type='checkbox'
                id='ongoing'
                checked={ongoing}
                onChange={() => handleOngoing(index)}
                /></div> : null}
            </div>
          </div>
          <button id='experience-submit' className='submit' type="submit" onClick={(e) => handleSubmit(e,index)}>{editMode ? 'Submit' : 'Edit'}</button>
          {editMode ? 
        <FaTrashAlt 
            role='button'
            className='experience-trash'
            tabIndex='0'
            aria-label='Delete experience info'
            onClick={() => handleDeletion(index)}
        /> : null}
          </form>
          <div className="tasks">
            <div className='details'>Tasks:</div>
            <ul>
              {tasks.map((item, taskIndex) => (
                <Tasks 
                key={taskIndex}
                index={index}
                taskIndex={taskIndex}
                editMode={item.editMode}
                value={item.task}
                handleTaskText={handleTaskText}
                handleTaskSubmit={handleTaskSubmit}
                handleTaskDeletion={handleTaskDeletion}
                focusOn={true}
                />
              ))}
            </ul>
            <div className='plus' onClick={() => handleTaskAdd(index)}><FaPlus /></div>
          </div>
      </div>
  )
}
