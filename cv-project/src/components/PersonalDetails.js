import './PersonalDetails.css'

export const PersonalDetails = () => {
  return (
    <div className="personal-details">
        <h2 className="section-title">Personal Details</h2>
        <div>
            <div className="details">Name:</div>
            <div className='output'>Pavel Laureano</div>
        </div>
        <div>
            <div className="details">Email:</div>
            <div className='output'>plaureanopena@gmail.com</div>
        </div>
        <div>
            <div className="details">Phone #:</div>
            <div className='output'>570-926-4314</div>
        </div>
        <button>Edit</button>
    </div>
  )
}
