import './EducationDetails.css'
import { FaTrashAlt } from 'react-icons/fa'


export const EducationDetails = () => {
  return (
    <section>
        <div className='complete-details'>
            <div className="details">School:</div>
            <div className="output">Hazleton Area High School</div>
        </div>
        <div className='complete-details'>
            <div className="details">Start:</div>
            <div className="output">2016</div>
        </div>
        <div className='complete-details'>
            <div className="details">End:</div>
            <div className="output">2020</div>
        </div>
        <button>Edit</button>
        <FaTrashAlt 
            role='button'
            tabIndex='0'
            aria-label='Delete education info'
        />
    </section>
  )
}
