import './Experience.css'
import { ExperienceCard } from './ExperienceCard'

export const Experience = () => {
  return (
    <div className='experience'>
        <h2 className="section-title">Experience</h2>
        <ExperienceCard />
        <ExperienceCard />
        <button>Add</button>
    </div>
  )
}

//similar to the Education component, the cards will be displayed from
//an array that was iterated through with .map()