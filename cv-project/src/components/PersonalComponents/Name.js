export const Name = ({name, setName, editMode}) => {
  return (
   <div>
     {!editMode ? (<div className='output'>{name}</div>) : (
        <input 
        autoFocus
        required
        className='output'
        type='text'
        id='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
     ) }
   </div> 
  )
}
