# Health AI Assistant 🏥

A modern, AI-powered health assessment tool that provides preliminary health evaluations based on reported symptoms. Built with React and featuring a clean, professional user interface.

## ✨ Features

- **Smart Symptom Analysis**: Advanced AI-powered analysis of symptoms across multiple medical categories
- **User-Friendly Interface**: Clean, modern UI with intuitive form controls
- **Quick Symptom Selection**: Common symptoms can be quickly added with one click
- **Comprehensive Assessment**: Evaluates symptoms against various medical conditions
- **Confidence Scoring**: Provides confidence levels for each diagnosis
- **Urgent Care Detection**: Special warnings for conditions requiring immediate attention
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Accessibility**: WCAG compliant with proper contrast and screen reader support

## 🚀 Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/health-ai-assistant.git
cd health-ai-assistant
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🛠️ Built With

- **React** - Frontend framework
- **CSS Modules** - Styling
- **AI Integration** - Custom diagnosis service

## 📋 Project Structure

```
health-ai-assistant/
├── src/
│   ├── components/
│   │   ├── PatientForm.js
│   │   ├── PatientForm.css
│   │   ├── DiagnosisResult.js
│   │   └── DiagnosisResult.css
│   ├── services/
│   │   └── diagnosisService.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── public/
│   └── index.html
├── package.json
└── README.md
```

## 🔍 Key Components

### PatientForm
- Collects patient information and symptoms
- Validates user input
- Quick-add buttons for common symptoms
- Real-time form validation

### DiagnosisResult
- Displays AI-generated diagnosis
- Shows confidence levels
- Lists recommended actions
- Highlights urgent conditions
- Provides medical disclaimers

### Diagnosis Service
- Processes symptom data
- Matches against medical condition database
- Calculates confidence scores
- Generates recommendations

## 🎯 Use Cases

1. **Quick Health Assessment**
   - Input symptoms
   - Get immediate preliminary diagnosis
   - Receive actionable recommendations

2. **Urgent Care Screening**
   - Identifies potentially serious conditions
   - Provides urgent care warnings
   - Recommends immediate medical attention when necessary

3. **Health Information**
   - Learn about possible conditions
   - Understand symptoms
   - Get professional medical recommendations

## ⚙️ Configuration

The application can be configured through environment variables:

```env
REACT_APP_API_URL=your_api_url
REACT_APP_API_KEY=your_api_key
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- Desktop (1200px and above)
- Tablet (768px to 1199px)
- Mobile (320px to 767px)

## 🔒 Privacy & Security

- No personal health data is stored
- All communications are encrypted
- Compliant with healthcare privacy standards
- Secure data transmission

## ⚠️ Disclaimer

This application is for demonstration purposes only and should not be used as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request





Project Link: [https://github.com/yourusername/health-ai-assistant](https://github.com/YashBarbole/health-ai-assistant)

## 🙏 Acknowledgments

- Medical condition database contributors
- React community
- All open-source contributors

---

Made with ❤️ by [Yash Barbole](https://github.com/YashBarbole)
