import './Education.css'
import { EducationDetails } from './EducationDetails'

const Education = () => {
  return (
    <div className="education">
        <h2 className="section-title">Education</h2>
        <EducationDetails />
        <EducationDetails />
        <button>Add</button>
    </div>
  )
}

//Today is just CSS but there will be an array of EducationDetails
//and each item in the array will display as a section of education
//educationDetails.map() will be used. But for now just one will be displayed
//without the .map() function. The "Add" button will be displayed after
//the educationDetails array is iterated through.
export default Education