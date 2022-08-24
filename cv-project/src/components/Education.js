import './stylesheets/Education.css'
import { EducationDetails } from './EducationDetails'
import { useState } from 'react'

const Education = () => {
  //This is the proper way to create state, as an object, or in this case, an array of objects
  const [education, setEducation] = useState([{school: '', start: '', end: '', editMode: true}])

  
  const handleSubmit = (e, index) => {
    e.preventDefault();
    //ok so in order to change state we create a new variable that is equivalent to the current state. And since the state is an array we use the spread operator here.
    const listEducations = [...education];
    //we then make the changes we want to make into the new variable, being sure to indicate the index of the thing that's being changed.
    listEducations[index].editMode = !listEducations[index].editMode
    //and of course we then set state to that new variable. Make sure all of the previous state info is in the new variable.
    setEducation(listEducations);
  }

  const handleAdd = () => {
    //in order to add a new object to state we need to create a new object with the same properties of the default(base) state object
   const newEducation = {school: '',start: '',end: '',editMode: true};
   //then using the spread operator we create a new variable that has all the same info as the previous state except with the new one added in as well
   const listEducations = [...education, newEducation]
   //and again we then set state to the newly created array of objects that includes the object that was newly created
   setEducation(listEducations);
  }

  const handleTextEntry = (e, section, index) => {
    //like always we create a new variable that's the same as old state
    const listEducations = [...education];
    //the 'section' argument is a string of the propery that wants to change, for example 'school' or 'start'
    //this function is attached to an input so 'e.target.value' is the user input
    listEducations[index][section] = e.target.value;
    setEducation(listEducations);
  }

  //using the .filter() array method we can filter out the item that was deleted.
  //key here is also equal to index. key isn't exactly a prop though so use something else next time.
  const handleDeletion = (key) => {
    const listEducations = education.filter((item, index) => {
      if (key !== index) {
        return item;
      }
    })
    setEducation(listEducations);
  }


  //pass in (prop drill) a property of an object with 'item."property"' and then afterwards if you deconstruct it you can just use the proprty name itself
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