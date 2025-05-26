import React, { useState } from 'react';
import './PatientForm.css';

const PatientForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    symptoms: '',
    duration: '',
    medicalHistory: '',
    currentMedications: ''
  });

  const [errors, setErrors] = useState({});

  const commonSymptoms = [
    'Fever',
    'Cough',
    'Headache',
    'Fatigue',
    'Nausea',
    'Shortness of breath',
    'Chest pain',
    'Joint pain',
    'Dizziness',
    'Sore throat'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const addSymptom = (symptom) => {
    const currentSymptoms = formData.symptoms ? formData.symptoms.split(',').map(s => s.trim()) : [];
    if (!currentSymptoms.includes(symptom)) {
      const newSymptoms = [...currentSymptoms, symptom].join(', ');
      setFormData(prev => ({
        ...prev,
        symptoms: newSymptoms
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.symptoms) newErrors.symptoms = 'Symptoms are required';
    if (!formData.duration) newErrors.duration = 'Duration is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="patient-form-container">
      <h2>Health Assessment Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="required">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your full name"
          />
          {errors.name && <span className="error-message">{errors.name}</span>}
        </div>

        <div className="form-group">
          <label className="required">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder="Enter your age"
            min="0"
            max="120"
          />
          {errors.age && <span className="error-message">{errors.age}</span>}
        </div>

        <div className="form-group">
          <label className="required">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="error-message">{errors.gender}</span>}
        </div>

        <div className="form-group">
          <label className="required">Symptoms</label>
          <div className="common-symptoms">
            {commonSymptoms.map((symptom) => (
              <button
                key={symptom}
                type="button"
                className="symptom-tag"
                onClick={() => addSymptom(symptom)}
              >
                {symptom}
              </button>
            ))}
          </div>
          <textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleInputChange}
            placeholder="Describe your symptoms"
          />
          {errors.symptoms && <span className="error-message">{errors.symptoms}</span>}
        </div>

        <div className="form-group">
          <label className="required">Duration of Symptoms</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleInputChange}
            placeholder="e.g., 2 days, 1 week"
          />
          {errors.duration && <span className="error-message">{errors.duration}</span>}
        </div>

        <div className="form-group">
          <label>Medical History</label>
          <textarea
            name="medicalHistory"
            value={formData.medicalHistory}
            onChange={handleInputChange}
            placeholder="List any pre-existing conditions, surgeries, or relevant medical history"
          />
        </div>

        <div className="form-group">
          <label>Current Medications</label>
          <textarea
            name="currentMedications"
            value={formData.currentMedications}
            onChange={handleInputChange}
            placeholder="List any medications you are currently taking"
          />
        </div>

        <button 
          type="submit" 
          className="submit-button"
          disabled={Object.keys(errors).length > 0}
        >
          Submit Assessment
        </button>
      </form>
    </div>
  );
};

export default PatientForm;