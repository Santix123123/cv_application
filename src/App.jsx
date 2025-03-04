
// import './App.css' // Comment this line to check if CSS is causing issues
import Education from './components/EducationalExperience.jsx'
import Experience from './components/PracticalExperience.jsx'
import GeneralInfo from './components/GeneralInfo.jsx'

function App() {
  return (
    <>
      <div className="App">
        <h1>CV Application</h1>
        <GeneralInfo />
        <Experience />
        <Education />
      </div>
    </>
  )
}

export default App;
