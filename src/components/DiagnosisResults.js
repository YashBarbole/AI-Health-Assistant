import React from 'react';
import { Brain, CheckCircle, AlertTriangle, AlertCircle, Info, Calendar, User, Thermometer, Heart } from 'lucide-react';

const DiagnosisResults = ({ diagnosis, patientData }) => {
  if (!diagnosis) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
          <Brain className="w-6 h-6 mr-2" />
          AI Diagnosis Results
        </h2>
        <div className="text-center py-12">
          <Brain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg mb-2">Waiting for analysis...</p>
          <p className="text-gray-400 text-sm">Complete the form and click "Get AI Diagnosis" to see results</p>
        </div>
      </div>
    );
  }

  const getUrgencyIcon = (urgency) => {
    switch (urgency) {
      case 'Critical':
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      case 'High':
        return <AlertCircle className="w-5 h-5 text-orange-600" />;
      case 'Medium':
        return <Info className="w-5 h-5 text-yellow-600" />;
      default:
        return <CheckCircle className="w-5 h-5 text-green-600" />;
    }
  };

  const getUrgencyColors = (urgency) => {
    switch (urgency) {
      case 'Critical':
        return {
          bg: 'bg-red-50',
          border: 'border-red-500',
          text: 'text-red-700',
          button: 'bg-red-600 hover:bg-red-700'
        };
      case 'High':
        return {
          bg: 'bg-orange-50',
          border: 'border-orange-500',
          text: 'text-orange-700',
          button: 'bg-orange-600 hover:bg-orange-700'
        };
      case 'Medium':
        return {
          bg: 'bg-yellow-50',
          border: 'border-yellow-500',
          text: 'text-yellow-700',
          button: 'bg-yellow-600 hover:bg-yellow-700'
        };
      default:
        return {
          bg: 'bg-green-50',
          border: 'border-green-500',
          text: 'text-green-700',
          button: 'bg-green-600 hover:bg-green-700'
        };
    }
  };

  const colors = getUrgencyColors(diagnosis.urgency);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
        <Brain className="w-6 h-6 mr-2" />
        AI Diagnosis Results
      </h2>

      <div className="space-y-6">
        {/* Main Diagnosis */}
        <div className={`p-6 rounded-lg border-l-4 ${colors.bg} ${colors.border}`}>
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-xl font-semibold text-gray-800">Preliminary Diagnosis</h3>
            {getUrgencyIcon(diagnosis.urgency)}
          </div>
          <p className={`text-lg font-medium mb-2 ${colors.text}`}>
            {diagnosis.condition}
          </p>
          <div className="text-sm text-gray-600">
            Generated on {new Date().toLocaleDateString()} at {new Date().toLocaleTimeString()}
          </div>
        </div>

        {/* Confidence & Severity Metrics */}
        <div className="grid grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-50 rounded-lg border">
            <div className="text-3xl font-bold text-indigo-600 mb-1">{diagnosis.confidence}%</div>
            <div className="text-sm text-gray-600 font-medium">AI Confidence</div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${diagnosis.confidence}%` }}
              ></div>
            </div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg border">
            <div className={`text-3xl font-bold mb-1 ${
              diagnosis.severity === 'Critical' ? 'text-red-600' :
              diagnosis.severity === 'High' ? 'text-orange-600' :
              diagnosis.severity === 'Medium' ? 'text-yellow-600' :
              'text-green-600'
            }`}>
              {diagnosis.severity}
            </div>
            <div className="text-sm text-gray-600 font-medium">Severity Level</div>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg border">
            <div className={`text-3xl font-bold mb-1 ${
              diagnosis.urgency === 'Critical' ? 'text-red-600' :
              diagnosis.urgency === 'High' ? 'text-orange-600' :
              diagnosis.urgency === 'Medium' ? 'text-yellow-600' :
              'text-green-600'
            }`}>
              {diagnosis.urgency}
            </div>
            <div className="text-sm text-gray-600 font-medium">Urgency Level</div>
          </div>
        </div>

        {/* Recommendations */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            Recommended Actions
          </h3>
          <ul className="space-y-3">
            {diagnosis.recommendations.map((rec, index) => (
              <li key={index} className="flex items-start">
                <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-green-600 text-sm font-medium">{index + 1}</span>
                </div>
                <span className="text-gray-700 leading-relaxed">{rec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Patient Summary */}
        <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
          <h3 className="text-lg font-semibold mb-4 flex items-center text-blue-800">
            <User className="w-5 h-5 mr-2" />
            Patient Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <div className="flex items-center text-blue-700">
                <User className="w-4 h-4 mr-2" />
                <span><strong>Name:</strong> {patientData.name}</span>
              </div>
              <div className="flex items-center text-blue-700">
                <Calendar className="w-4 h-4 mr-2" />
                <span><strong>Age:</strong> {patientData.age} years old</span>
              </div>
              {patientData.gender && (
                <div className="flex items-center text-blue-700">
                  <span className="w-4 h-4 mr-2">👤</span>
                  <span><strong>Gender:</strong> {patientData.gender}</span>
                </div>
              )}
            </div>
            <div className="space-y-2">
              {patientData.temperature && (
                <div className="flex items-center text-blue-700">
                  <Thermometer className="w-4 h-4 mr-2" />
                  <span><strong>Temperature:</strong> {patientData.temperature}°F</span>
                </div>
              )}
              {patientData.heartRate && (
                <div className="flex items-center text-blue-700">
                  <Heart className="w-4 h-4 mr-2" />
                  <span><strong>Heart Rate:</strong> {patientData.heartRate} BPM</span>
                </div>
              )}
              {patientData.bloodPressure && (
                <div className="flex items-center text-blue-700">
                  <span className="w-4 h-4 mr-2">🩺</span>
                  <span><strong>Blood Pressure:</strong> {patientData.bloodPressure}</span>
                </div>
              )}
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-blue-200">
            <div className="text-blue-700">
              <strong>Reported Symptoms:</strong>
              <div className="mt-2 flex flex-wrap gap-2">
                {patientData.symptoms.map((symptom, index) => (
                  <span 
                    key={index}
                    className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Emergency Warning */}
        {diagnosis.urgency === 'Critical' && (
          <div className="bg-red-100 border border-red-400 rounded-lg p-6">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-6 h-6 text-red-600 mr-2" />
              <h3 className="text-lg font-semibold text-red-800">⚠️ URGENT MEDICAL ATTENTION REQUIRED</h3>
            </div>
            <p className="text-red-700 mb-4">
              Based on the symptoms provided, this condition may require immediate medical care. 
              Please contact emergency services or visit the nearest emergency room.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium">
                📞 Call Emergency Services
              </button>
              <button className="bg-red-100 text-red-700 px-6 py-2 rounded-lg hover:bg-red-200 transition-colors font-medium border border-red-300">
                🏥 Find Nearest Hospital
              </button>
            </div>
          </div>
        )}

        {/* Disclaimer */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
          <div className="flex items-start">
            <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5 flex-shrink-0" />
            <div className="text-yellow-800 text-sm">
              <strong>Medical Disclaimer:</strong> This AI diagnosis is for informational purposes only and should not replace professional medical advice. 
              Always consult with qualified healthcare providers for proper diagnosis and treatment. 
              If you're experiencing a medical emergency, call emergency services immediately.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisResults;