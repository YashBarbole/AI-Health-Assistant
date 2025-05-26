import React from 'react';
import './DiagnosisResult.css';

const DiagnosisResult = ({ diagnosis }) => {
  if (!diagnosis) return null;

  const { 
    condition, 
    confidence, 
    recommendations, 
    patientInfo,
    disclaimer 
  } = diagnosis;

  const isUrgent = condition.startsWith('URGENT');

  return (
    <div className="diagnosis-container">
      <div className="diagnosis-header">
        <h3>Diagnosis Result</h3>
        <div className="confidence-indicator">
          Confidence: {Math.round(confidence * 100)}%
        </div>
      </div>

      <div className="patient-info">
        <div className="result-box-title">Patient Information</div>
        <p>Name: {patientInfo.name}</p>
        <p>Age: {patientInfo.age}</p>
        <p>Gender: {patientInfo.gender}</p>
      </div>

      <div className="condition-box">
        <div className="result-box-title">Diagnosed Condition</div>
        <div className="condition-details">
          {condition}
        </div>
      </div>

      {isUrgent && (
        <div className="urgent-warning">
          This condition requires immediate medical attention!
        </div>
      )}

      <div className="recommendations-box">
        <div className="result-box-title">Recommendations</div>
        <ul>
          {recommendations.map((recommendation, index) => (
            <li key={index}>{recommendation}</li>
          ))}
        </ul>
      </div>

      <div className="disclaimer">
        {disclaimer}
      </div>
    </div>
  );
};

export default DiagnosisResult; 