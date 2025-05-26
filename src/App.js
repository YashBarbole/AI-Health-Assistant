import React, { useState } from 'react';
import './App.css';
import PatientForm from './components/PatientForm';
import DiagnosisResult from './components/DiagnosisResult';
import analyzeSymptomsWithAI from './services/diagnosisService';

function App() {
  const [diagnosis, setDiagnosis] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    try {
      const result = await analyzeSymptomsWithAI(formData);
      setDiagnosis(result);
    } catch (error) {
      console.error('Error getting diagnosis:', error);
      // You could add error state handling here
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Health AI Assistant</h1>
          <p>Get instant preliminary health assessments powered by advanced AI technology</p>
          <div className="header-pills">
            <span className="header-pill">Quick Assessment</span>
            <span className="header-pill">AI-Powered</span>
            <span className="header-pill">Private & Secure</span>
          </div>
        </div>
      </header>

      <main className="app-content">
        <PatientForm onSubmit={handleFormSubmit} />
        {loading && (
          <div className="loading-indicator">
            Analyzing symptoms...
          </div>
        )}
        {diagnosis && <DiagnosisResult diagnosis={diagnosis} />}
      </main>

      <footer className="app-footer">
        <p>
          Disclaimer: This is a demonstration AI health assistant. It is not a substitute
          for professional medical advice, diagnosis, or treatment.
        </p>
      </footer>
    </div>
  );
}

export default App;