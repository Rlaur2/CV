export const School = ({school,editMode, index, handleTextEntry}) => {
  return (
    <div>
        {editMode ? (
            <input 
                autoFocus
                required
                className="output"
                type='text'
                id="school"
                value={school}
                onChange={(e) => handleTextEntry(e, 'school', index)}
            />) : (<div className="output">{school}</div>)}
    </div>
  )
}

//Once again, this and the other two components could've just been a single component