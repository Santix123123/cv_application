
import { useState } from 'react'
import './../styles/App.css'

function EducationalExperience() {
  const [editMode, setEditMode] = useState(true);
  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducation((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="section">
      <h2>Educational Experience</h2>
      {editMode ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEditMode(false);
          }}
        >
          <input
            type="text"
            name="school"
            placeholder="School Name"
            value={education.school}
            onChange={handleChange}
          />
          <input
            type="text"
            name="title"
            placeholder="Title of Study"
            value={education.title}
            onChange={handleChange}
          />
          <input
            type="date"
            name="date"
            value={education.date}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>School: {education.school}</p>
          <p>Title: {education.title}</p>
          <p>Date: {education.date}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}
export default EducationalExperience;