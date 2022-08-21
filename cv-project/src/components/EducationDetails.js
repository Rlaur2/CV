import './stylesheets/EducationDetails.css'
import { FaTrashAlt } from 'react-icons/fa'
import { School } from './EducationDetailsSubComponents/School'
import { Start } from './EducationDetailsSubComponents/Start'
import { End } from './EducationDetailsSubComponents/End'


export const EducationDetails = ({school, start, end, editMode, index, handleSubmit, handleTextEntry, handleDeletion}) => {
  return (
    <form className='education-card'>
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
        <button type="submit" onClick={(e) => handleSubmit(e,index)}>{editMode ? 'Submit' : 'Edit'}</button>
        {editMode ? <FaTrashAlt 
            role='button'
            tabIndex='0'
            aria-label='Delete education info'
            onClick={() => handleDeletion(index)}
        /> : null}
    </form>
  )
}
