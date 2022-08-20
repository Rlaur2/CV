import './ExperienceCard.css'
import { FaTrashAlt } from 'react-icons/fa'

export const ExperienceCard = () => {
  return (
      <section className='experienceSection'>
          <div>
            <div className='complete-details'>
              <div className="details">Company:</div>
              <div className="output">Pro-Con</div>
            </div>
            <div className='complete-details'>
              <div className="details">Title:</div>
              <div className="output">Machine Operator</div>
            </div>
            <div className='complete-details'>
              <div className="details">Start:</div>
              <div className="output">2016</div>
            </div>
            <div className='complete-details'>
              <div className="details">End</div>
              <div className="output">2020</div>
            </div>
          </div>
          <div className="tasks">
            <div className='details'>Tasks:</div>
            <ul>
              <li className='output'>Quality inspection</li>
              <li className='output'>Troubleshooting Machine</li>
            </ul>
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
