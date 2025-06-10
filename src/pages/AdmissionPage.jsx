import React, { useState } from 'react';
import './Admission.css';

const Admission = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Admission submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nCourse: ${formData.course}`);
    setFormData({ name: '', email: '', course: '' });
  };

  return (
    <div className="admission">
      <h2>Admission Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email Address:
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Select Course:
          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          >
            <option value="">-- Choose a course --</option>
            <option value="Web Development">Web Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="React JS">React JS</option>
          </select>
        </label>

        <button type="submit">Apply Now</button>
      </form>
    </div>
  );
};

export default Admission;
