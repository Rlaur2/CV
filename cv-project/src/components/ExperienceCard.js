import './stylesheets/ExperienceCard.css'
import { FaTrashAlt } from 'react-icons/fa'
import { ExperienceInput } from './ExperienceInput'
import { FaPlus } from 'react-icons/fa'
import { Tasks } from './Tasks'

export const ExperienceCard = ({index, company, title, start, end, ongoing, editMode, tasks, handleSubmit, handleTextEntry, handleDeletion, handleTaskText, handleTaskDeletion, handleTaskAdd, handleTaskSubmit, handleOngoing}) => {
  return (
      <form className='experienceSection card'>
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
                focusOn={false}
                />
              ))}
            </ul>
            <div className='plus' onClick={() => handleTaskAdd(index)}><FaPlus /></div>
          </div>
          <button id='experience-submit' className='submit' type="submit" onClick={(e) => handleSubmit(e,index)}>{editMode ? 'Submit' : 'Edit'}</button>
          {/* Hitting enter on this form isn't acting the same as the others. Look into that. */}
          {editMode ? 
        <FaTrashAlt 
            role='button'
            tabIndex='0'
            aria-label='Delete experience info'
            onClick={() => handleDeletion(index)}
        /> : null}
      </form>
  )
}
