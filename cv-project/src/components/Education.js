import './stylesheets/Education.css'
import { EducationDetails } from './EducationDetails'
import { useState } from 'react'

const Education = () => {
  const [education, setEducation] = useState([{school: '', start: '', end: '', editMode: true}])

  
  const handleSubmit = (e, index) => {
    e.preventDefault();
    const listEducations = [...education];
    listEducations[index].editMode = !listEducations[index].editMode
    setEducation(listEducations);
  }

  const handleAdd = () => {
   const newEducation = {school: '',start: '',end: '',editMode: true};
   const listEducations = [...education, newEducation]
   setEducation(listEducations);
  }

  const handleTextEntry = (e, section, index) => {
    const listEducations = [...education];
    listEducations[index][section] = e.target.value;
    setEducation(listEducations);
  }

  const handleDeletion = (key) => {
    const listEducations = education.filter((item, index) => {
      if (key !== index) {
        return item;
      }
    })
    setEducation(listEducations);
  }



  return (
    <div className="education">
        <h2 className="section-title">Education</h2>
          {education.map((item,index) => (
            <EducationDetails 
            key={index}
            index = {index}
            school={item.school}
            start={item.start}
            end={item.end}
            editMode={item.editMode}
            setEducation={setEducation}
            handleSubmit={handleSubmit}
            handleTextEntry={handleTextEntry}
            handleDeletion={handleDeletion}
            />
          ))}
        <button className='add' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default Education