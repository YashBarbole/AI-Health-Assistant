import React, { useState } from 'react';
import { AlertCircle, Heart, Thermometer, Activity, User, Brain, CheckCircle, XCircle } from 'lucide-react';
import PatientForm from './PatientForm';
import DiagnosisResults from './DiagnosisResults';
import { diagnoseCondition } from '../utils/diagnosticEngine';

const HealthDiagnosticAgent = () => {
  // State to store patient data
  const [patientData, setPatientData] = useState({
    name: '',
    age: '',
    gender: '',
    symptoms: [],
    temperature: '',
    bloodPressure: '',
    heartRate: '',
    painLevel: ''
  });

  // State to store diagnosis results
  const [diagnosis, setDiagnosis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Handle form input changes
  const handleInputChange = (field, value) => {
    setPatientData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle symptom selection
  const handleSymptomToggle = (symptom) => {
    setPatientData(prev => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter(s => s !== symptom)
        : [...prev.symptoms, symptom]
    }));
  };

  // Analyze symptoms and provide diagnosis
  const analyzeSymptoms = () => {
    if (!patientData.name || !patientData.age || patientData.symptoms.length === 0) {
      alert('Please fill in all required fields and select at least one symptom.');
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      const result = diagnoseCondition(patientData);
      setDiagnosis(result);
      setIsAnalyzing(false);
    }, 2000);
  };

  // Reset form
  const resetForm = () => {
    setPatientData({
      name: '',
      age: '',
      gender: '',
      symptoms: [],
      temperature: '',
      bloodPressure: '',
      heartRate: '',
      painLevel: ''
    });
    setDiagnosis(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-12 h-12 text-indigo-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-800">AI Health Diagnostic Agent</h1>
          </div>
          <p className="text-gray-600 text-lg">Enter your symptoms and get AI-powered health insights</p>
          <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mt-4 rounded max-w-2xl mx-auto">
            <div className="flex items-center">
              <AlertCircle className="w-5 h-5 text-yellow-600 mr-2" />
              <p className="text-yellow-800 text-sm">
                <strong>Disclaimer:</strong> This is for educational purposes only. Always consult healthcare professionals for medical advice.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Patient Form */}
          <PatientForm
            patientData={patientData}
            onInputChange={handleInputChange}
            onSymptomToggle={handleSymptomToggle}
            onAnalyze={analyzeSymptoms}
            onReset={resetForm}
            isAnalyzing={isAnalyzing}
          />

          {/* Diagnosis Results */}
          <DiagnosisResults
            diagnosis={diagnosis}
            patientData={patientData}
          />
        </div>
      </div>
    </div>
  );
};

export default HealthDiagnosticAgent;