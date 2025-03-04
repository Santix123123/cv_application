import React, { useState } from 'react';
import './Education.css';

function Education({ onSubmit }) {
  const [school, setSchool] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = () => {
    onSubmit({ school, title, date });
    setIsEditing(false);
  };

  return (
    <div className="education">
      <h2>Educational Experience</h2>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={school}
            onChange={(e) => setSchool(e.target.value)}
            placeholder="Enter school name"
          />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title of study"
          />
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="Enter date of study"
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>School: {school}</p>
          <p>Title of Study: {title}</p>
          <p>Date: {date}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Education;
