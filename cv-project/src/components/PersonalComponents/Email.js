import React from 'react'

export const Email = ({email, setEmail, editMode}) => {
  return (
    <div>
        {!editMode ? (<div className='output'>{email}</div>) : (
            <input
            className='output' 
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
    </div>
  )
}
