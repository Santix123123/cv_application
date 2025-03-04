import { useState } from 'react'
import './../styles/App.css'
function GeneralInfo() {
  const [editMode, setEditMode] = useState(true);
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInfo((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="section">
      <h2>General Information</h2>
      {editMode ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setEditMode(false);
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={info.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={info.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={info.phone}
            onChange={handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Name: {info.name}</p>
          <p>Email: {info.email}</p>
          <p>Phone: {info.phone}</p>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
}
export default GeneralInfo;