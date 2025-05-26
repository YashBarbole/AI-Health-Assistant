// This is a mock diagnosis service
// In a real application, you would integrate with a medical AI API

const commonConditions = {
  // Respiratory Conditions
  'cough, fever, shortness of breath, fatigue': {
    condition: 'Possible COVID-19 or Upper Respiratory Infection',
    confidence: 0.85,
    recommendations: [
      'Isolate yourself to prevent spread',
      'Monitor oxygen levels',
      'Get tested for COVID-19',
      'Stay hydrated and rest',
      'Seek immediate care if breathing becomes difficult'
    ]
  },
  'cough, runny nose, sneezing, sore throat': {
    condition: 'Common Cold',
    confidence: 0.82,
    recommendations: [
      'Rest and stay hydrated',
      'Use over-the-counter cold medications',
      'Use throat lozenges if needed',
      'Monitor symptoms for worsening'
    ]
  },
  'wheezing, shortness of breath, chest tightness, cough': {
    condition: 'Asthma',
    confidence: 0.88,
    recommendations: [
      'Use prescribed inhaler if available',
      'Avoid triggers',
      'Stay calm and practice breathing exercises',
      'Seek medical attention if symptoms persist'
    ]
  },

  // Gastrointestinal Conditions
  'nausea, vomiting, diarrhea, stomach pain': {
    condition: 'Gastroenteritis (Stomach Flu)',
    confidence: 0.84,
    recommendations: [
      'Stay hydrated with clear fluids',
      'Rest your stomach - avoid solid foods initially',
      'Gradually return to normal diet',
      'Seek care if symptoms persist over 48 hours'
    ]
  },
  'heartburn, chest pain, difficulty swallowing, regurgitation': {
    condition: 'Acid Reflux (GERD)',
    confidence: 0.80,
    recommendations: [
      'Avoid trigger foods',
      'Don\'t lie down after eating',
      'Elevate head while sleeping',
      'Consider over-the-counter antacids'
    ]
  },

  // Neurological Conditions
  'headache, sensitivity to light, nausea, dizziness': {
    condition: 'Migraine',
    confidence: 0.86,
    recommendations: [
      'Rest in a quiet, dark room',
      'Apply cold or warm compress',
      'Stay hydrated',
      'Consider over-the-counter pain relievers'
    ]
  },
  'headache, fever, neck stiffness, confusion': {
    condition: 'URGENT: Possible Meningitis',
    confidence: 0.90,
    recommendations: [
      'SEEK IMMEDIATE MEDICAL ATTENTION',
      'This is potentially serious',
      'Do not wait for symptoms to worsen',
      'Call emergency services'
    ]
  },

  // Musculoskeletal Conditions
  'joint pain, stiffness, swelling, reduced movement': {
    condition: 'Arthritis',
    confidence: 0.82,
    recommendations: [
      'Apply ice or heat therapy',
      'Gentle exercise and stretching',
      'Consider anti-inflammatory medications',
      'Consult with a rheumatologist'
    ]
  },
  'lower back pain, muscle stiffness, limited mobility, pain while moving': {
    condition: 'Lower Back Strain',
    confidence: 0.83,
    recommendations: [
      'Rest but avoid complete inactivity',
      'Apply ice/heat therapy',
      'Gentle stretching exercises',
      'Consider over-the-counter pain relievers'
    ]
  },

  // Cardiovascular Conditions
  'chest pain, shortness of breath, sweating, anxiety': {
    condition: 'URGENT: Possible Heart Attack',
    confidence: 0.95,
    recommendations: [
      'CALL EMERGENCY SERVICES IMMEDIATELY',
      'Chew aspirin if available and no allergies',
      'Rest and stay calm',
      'Do not drive yourself to hospital'
    ]
  },

  // Allergic Conditions
  'sneezing, itchy eyes, runny nose, congestion': {
    condition: 'Allergies',
    confidence: 0.87,
    recommendations: [
      'Avoid known allergens',
      'Try over-the-counter antihistamines',
      'Use nasal saline rinse',
      'Consider using air purifiers'
    ]
  },
  'skin rash, itching, swelling, redness': {
    condition: 'Allergic Reaction',
    confidence: 0.85,
    recommendations: [
      'Stop exposure to potential allergen',
      'Take antihistamines if available',
      'Apply calamine lotion for itching',
      'Seek medical attention if symptoms worsen'
    ]
  },

  // Mental Health
  'anxiety, racing thoughts, restlessness, difficulty sleeping': {
    condition: 'Anxiety',
    confidence: 0.80,
    recommendations: [
      'Practice deep breathing exercises',
      'Consider meditation or mindfulness',
      'Maintain regular sleep schedule',
      'Consult mental health professional'
    ]
  },
  'fatigue, loss of interest, sleep changes, mood changes': {
    condition: 'Depression',
    confidence: 0.78,
    recommendations: [
      'Seek professional counseling',
      'Maintain daily routine',
      'Exercise regularly',
      'Connect with supportive friends/family'
    ]
  }
};

const analyzeSymptomsWithAI = async (patientData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  // Convert symptoms to lowercase and split into array
  const patientSymptoms = patientData.symptoms.toLowerCase().split(',').map(s => s.trim());

  // Find best matching condition
  let bestMatch = null;
  let highestMatchCount = 0;

  for (const [conditionSymptoms, details] of Object.entries(commonConditions)) {
    const conditionSymptomList = conditionSymptoms.split(',').map(s => s.trim());
    let matchCount = 0;

    // Count how many symptoms match
    for (const symptom of patientSymptoms) {
      if (conditionSymptomList.some(cs => symptom.includes(cs) || cs.includes(symptom))) {
        matchCount++;
      }
    }

    // If we found a better match (more matching symptoms)
    if (matchCount >= 2 && matchCount > highestMatchCount) {
      highestMatchCount = matchCount;
      bestMatch = {
        ...details,
        matchedSymptoms: matchCount,
        totalSymptoms: conditionSymptomList.length,
        confidence: (matchCount / conditionSymptomList.length) * details.confidence
      };
    }
  }

  // If no good match found (less than 2 matching symptoms), provide general response
  if (!bestMatch) {
    bestMatch = {
      condition: 'Non-Specific Symptoms',
      confidence: 0.4,
      recommendations: [
        'Monitor your symptoms',
        'Keep a symptom diary',
        'Rest and stay hydrated',
        'Consult with a healthcare provider if symptoms persist or worsen'
      ]
    };
  }

  // Add patient info and disclaimer
  const diagnosis = {
    ...bestMatch,
    patientInfo: {
      name: patientData.name,
      age: patientData.age,
      gender: patientData.gender
    },
    disclaimer: 'This is an AI-assisted preliminary assessment and should not replace professional medical advice. Please consult with a healthcare provider for accurate diagnosis and treatment. If you experience severe symptoms, seek immediate medical attention.'
  };

  return diagnosis;
};

export default analyzeSymptomsWithAI; 