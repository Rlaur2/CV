import './stylesheets/Experience.css'
import { ExperienceCard } from './ExperienceCard'
import { useState } from 'react'

//This component is very similar to the Education component except for the addition of another array in the object state
export const Experience = () => {
  const [experience, setExperience] = useState([{company: '', title: '', start: '', end: '', editMode: true, ongoing: false, tasks: [{editMode: true, task: ''}]}]);

  const handleSubmit = (e, index) => {
    e.preventDefault();
    const listExperience = [...experience];
    listExperience[index].editMode = !listExperience[index].editMode
    setExperience(listExperience);
  }

  const handleAdd = () => {
    const newExperience = {company: '', title: '', start: '', end: '', editMode: true, ongoing: false, tasks: [{editMode: true, task: ''}]};
    const listExperience = [...experience, newExperience]
    setExperience(listExperience);
   }

   const handleTextEntry = (e, section, index) => {
    const listExperience = [...experience];
    listExperience[index][section] = e.target.value;
    setExperience(listExperience);
  }

  const handleDeletion = (key) => {
    const listExperience = experience.filter((item, index) => {
      if (key !== index) {
        return item;
      }
    })
    setExperience(listExperience);
  }

  const handleOngoing = (index) => {
    //this handles the text of the "end" input. If set to true, the "end" input will read "Current"
    const listExperience = [...experience];
    listExperience[index].ongoing = !listExperience[index].ongoing
    setExperience(listExperience);
  }

  const handleTaskAdd = (index) => {
    const newTask = {editMode: true, task: ''};
    const listExperience = [...experience];
    //all of the handleTasks functions work the same as the normal ones except a level deeper into the object
    listExperience[index].tasks = [...listExperience[index].tasks, newTask];
    setExperience(listExperience);
  }

  const handleTaskText = (e, index, taskIndex) => {
    const listExperience = [...experience];
    listExperience[index].tasks[taskIndex].task = e.target.value;
    setExperience(listExperience);
  }

  const handleTaskSubmit = (e, index, taskIndex) => {
    e.preventDefault();
    const listExperience = [...experience];
    listExperience[index].tasks[taskIndex].editMode = !listExperience[index].tasks[taskIndex].editMode;
    setExperience(listExperience); 
  }

  const handleTaskDeletion = (index, taskIndex) => {
    const listExperience = [...experience];
    const taskList = listExperience[index].tasks.filter((item, filterIndex) => {
      if (taskIndex !== filterIndex) {
        return item;
      }
    });
    listExperience[index].tasks = taskList;
    setExperience(listExperience);
  }
  
  return (
    <div className='experience'>
        <h2 className="section-title">Experience</h2>
        {experience.map((item,index) => (
          <ExperienceCard
            key={index}
            index={index}
            company={item.company}
            title={item.title}
            start={item.start}
            end={item.end}
            editMode={item.editMode}
            ongoing={item.ongoing}
            tasks={item.tasks}
            setExperience={setExperience}
            handleSubmit={handleSubmit}
            handleTextEntry={handleTextEntry}
            handleDeletion={handleDeletion}
            handleOngoing={handleOngoing}
            handleTaskAdd={handleTaskAdd}
            handleTaskText={handleTaskText}
            handleTaskDeletion={handleTaskDeletion}
            handleTaskSubmit={handleTaskSubmit}

            />
        ))}
        <button className='add' onClick={handleAdd}>Add</button>
    </div>
  )
}
