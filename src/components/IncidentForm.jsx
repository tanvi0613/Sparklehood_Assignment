import React, { useState } from 'react';

const IncidentForm = ({ onAddIncident }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState('Medium');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    const newErrors = {};
    if (!title.trim()) newErrors.title = 'Title is required';
    if (!description.trim()) newErrors.description = 'Description is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    // Create and add new incident
    const newIncident = {
      title,
      description,
      severity,
    };
    
    onAddIncident(newIncident);
    
    // Reset form
    setTitle('');
    setDescription('');
    setSeverity('Medium');
    setErrors({});
  };

  return (
    <form className="incident-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={errors.title ? 'error' : ''}
        />
        {errors.title && <div className="error-message">{errors.title}</div>}
      </div>
      
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows="4"
          className={errors.description ? 'error' : ''}
        ></textarea>
        {errors.description && <div className="error-message">{errors.description}</div>}
      </div>
      
      <div className="form-group">
        <label>Severity:</label>
        <div className="radio-group">
          {['Low', 'Medium', 'High'].map(option => (
            <label key={option} className="radio-label">
              <input
                type="radio"
                name="severity"
                value={option}
                checked={severity === option}
                onChange={() => setSeverity(option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
      
      <button type="submit" className="submit-btn">Report Incident</button>
    </form>
  );
};

export default IncidentForm;