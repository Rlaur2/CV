import './App.css';
import { PersonalDetails } from './components/PersonalDetails';
import Education from './components/Education';
import { Experience } from './components/Experience';

function App() {
  return (
    <div className="App">
      <PersonalDetails />
      <Education />
      <Experience />
    </div>
  );
}

export default App;
