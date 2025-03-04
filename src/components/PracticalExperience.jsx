
import { useState } from 'react'
import './../styles/App.css'

function PracticalExperience() {
    const [editMode, setEditMode] = useState(true);
    const [experience, setExperience] = useState({
      company: "",
      position: "",
      responsibilities: "",
      dateFrom: "",
      dateTo: "",
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setExperience((prev) => ({ ...prev, [name]: value }));
    };
  
    return (
      <div className="section">
        <h2>Practical Experience</h2>
        {editMode ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setEditMode(false);
            }}
          >
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={experience.company}
              onChange={handleChange}
            />
            <input
              type="text"
              name="position"
              placeholder="Position Title"
              value={experience.position}
              onChange={handleChange}
            />
            <textarea
              name="responsibilities"
              placeholder="Main Responsibilities"
              value={experience.responsibilities}
              onChange={handleChange}
            />
            <input
              type="date"
              name="dateFrom"
              value={experience.dateFrom}
              onChange={handleChange}
            />
            <input
              type="date"
              name="dateTo"
              value={experience.dateTo}
              onChange={handleChange}
            />
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <p>Company: {experience.company}</p>
            <p>Position: {experience.position}</p>
            <p>Responsibilities: {experience.responsibilities}</p>
            <p>From: {experience.dateFrom}</p>
            <p>To: {experience.dateTo}</p>
            <button onClick={() => setEditMode(true)}>Edit</button>
          </div>
        )}
      </div>
    );
  }
  export default PracticalExperience;