import './stylesheets/EducationDetails.css'
import { FaTrashAlt } from 'react-icons/fa'
import { School } from './EducationDetailsSubComponents/School'
import { Start } from './EducationDetailsSubComponents/Start'
import { End } from './EducationDetailsSubComponents/End'

//Again we used multiple different components when really they're pretty similar and could've been handled with just one
export const EducationDetails = ({school, start, end, editMode, index, handleSubmit, handleTextEntry, handleDeletion}) => {
  return (
      <form className='card'>
        {/*This whole section is in a form so that hitting "Enter" does the same thing as whatever the "submit" button does. */}
        <div className='complete-details'>
            <label htmlFor='school' className="details">School:</label>
            <School 
                school={school}
                index={index}
                editMode={editMode}
                handleTextEntry={handleTextEntry}
            />
        </div>
        <div className='complete-details'>
            <label htmlFor='start' className="details">Start:</label>
            <Start
                start={start}
                index={index}
                editMode={editMode}
                handleTextEntry={handleTextEntry}
            />
        </div>
        <div className='complete-details'>
            <label htmlFor='end' className="details">End:</label>
            <End 
                end={end}
                index={index}
                editMode={editMode}
                handleTextEntry={handleTextEntry}
            />
        </div>
        <button type="submit" className='submit' onClick={(e) => handleSubmit(e,index)}>{editMode ? 'Submit' : 'Edit'}</button>
        {/*this delete button is using the editMode state to determine whether it gets displayed or not. 'null' makes it so that it doesn't appear */}
        {editMode ? 
        <FaTrashAlt 
            role='button'
            tabIndex='0'
            aria-label='Delete education info'
            onClick={() => handleDeletion(index)}
        /> : null}
    </form>
  )
}
