import './stylesheets/PersonalDetails.css'
import { useState } from 'react'
import { Name } from './PersonalComponents/Name.js'
import { Email } from './PersonalComponents/Email'
import { Phone } from './PersonalComponents/Phone'

//So this was the first full React component I made from scratch. Looking back, the state should've been in an object instead of four seperate states. I fix this error in the Education section. 
export const PersonalDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editMode, setEditMode] = useState(true);
  
  //I'm really proud of creating an "edit mode" state which will determine whether an input is displayed or just the text.
  //literally by changing only a single thing, editMode, it completely handles the submit function. The 'submit' text changes to 'edit' and vice versa when toggled.

  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  }

  //I created three seperate components here but I really should've just re-used one. I fix this error in the Experience section.
  return (
    <form className="personal-details">
        <h2 className="section-title">Personal Details</h2>
        <div>
            <label htmlFor='name' className="details">Name:</label>
            <Name
              name={name}
              setName={setName}
              editMode={editMode}
              />
        </div>
        <div>
            <label htmlFor='email' className="details">Email:</label>
            <Email
              email={email}
              setEmail={setEmail}
              editMode={editMode}
            />
        </div>
        <div>
            <label className="details">Phone #:</label>
            <Phone
              phone={phone}
              setPhone={setPhone}
              editMode={editMode}
            />
        </div>
        <button className='submit' onClick={handleSubmit}>{editMode ? 'Submit' : 'Edit'}</button>
    </form>
  )
}
