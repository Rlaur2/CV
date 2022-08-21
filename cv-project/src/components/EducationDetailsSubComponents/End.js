export const End = ({end, editMode, index, handleTextEntry}) => {
  return (
    <div>
        {editMode ? (
            <input 
                className="output"
                type='text'
                id="end"
                value={end}
                onChange={(e) => handleTextEntry(e, 'end', index)}
            />) : (<div className="output">{end}</div>)}
    </div>
  )
}
