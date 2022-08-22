export const ExperienceInput = ({editMode, section, sectionString, index, handleTextEntry, focusOn, ongoing}) => {
  return (
    <div>
        {ongoing ? (<div className="output">Current</div>) : editMode ? (<input 
                autoFocus={focusOn}
                required
                className="output"
                type='text'
                id={sectionString}
                value={section}
                onChange={(e) => handleTextEntry(e, sectionString, index)}
            />) : (<div className="output">{section}</div>)}
    </div>
  )
}
