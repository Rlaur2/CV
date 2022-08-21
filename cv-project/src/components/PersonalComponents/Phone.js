export const Phone = ({phone, setPhone, editMode}) => {
  return (
    <div>
        {!editMode ? (<div className='output'>{phone}</div>) : (
            <input 
            className='output'
            type="tel" 
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)} 
          />
        )}
    </div>
  )
}
