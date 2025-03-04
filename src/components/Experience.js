import React, { useState } from 'react';
import './Experience.css';

function Experience({ onSubmit }) {
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [dates, setDates] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = () => {
    onSubmit({ company, position, responsibilities, dates });
    setIsEditing(false);
  };

  return (
    <div className="experience">
      <h2>Practical Experience</h2>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Enter company name"
          />
          <input
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Enter position title"
          />
          <input
            type="text"
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
            placeholder="Enter main responsibilities"
          />
          <input
            type="text"
            value={dates}
            onChange={(e) => setDates(e.target.value)}
            placeholder="Enter work dates"
          />
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div>
          <p>Company: {company}</p>
          <p>Position: {position}</p>
          <p>Responsibilities: {responsibilities}</p>
          <p>Dates: {dates}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default Experience;
