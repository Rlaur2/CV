import './stylesheets/PersonalDetails.css'
import { useState } from 'react'
import { Name } from './PersonalComponents/Name.js'
import { Email } from './PersonalComponents/Email'
import { Phone } from './PersonalComponents/Phone'

export const PersonalDetails = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editMode, setEditMode] = useState(true);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setEditMode(!editMode);
  }

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
