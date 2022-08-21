export const Start = ({start, editMode, index, handleTextEntry}) => {
  return (
    <div>
        {editMode ? (
            <input 
                className="output"
                type='text'
                id="start"
                value={start}
                onChange={(e) => handleTextEntry(e, 'start', index)}
            />) : (<div className="output">{start}</div>)}
    </div>
  )
}
