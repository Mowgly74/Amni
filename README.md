<<<<<<< HEAD
# AMNI: AI-Driven Medical Emergency System

AMNI is an integrated medical emergency support platform designed to provide first responders with immediate access to critical patient information. It combines a secure mobile application, a QR-enabled wristband, and a Bluetooth emergency button to deliver rapid and reliable emergency assistance. The system leverages advanced AI models for medical understanding, medication conflict detection, allergy analysis, and health-state assessment, while ensuring secure handling of sensitive health records.

---

## Key Features

### 1. Digital Medical Profile
- Users can create and update comprehensive medical profiles.
- Supports uploading medical reports, laboratory results, and radiology scans.
- Stores current medications, allergies, chronic diseases, and past medical history.
- All data is securely encrypted.

### 2. AI-Based Medical Understanding and Summarization
AMNI integrates several AI capabilities designed for emergency-critical insight:

- **Medical history analysis** using BioBERT-based NLP.
- **Medication conflict detection** using interaction rules and model-based risk analysis.
- **Allergy detection and annotation** to highlight potentially dangerous exposures.
- **Health state assessment** based on historical data, medications, and recent reports.
- **Summarization of chronic diseases and conditions** using a domain-adapted text summarizer.
- **Extraction of key information** such as diagnoses, recent lab results,blood type and treatment plans.

These summaries are optimized for rapid review by EMTs during emergencies.

### 3. Voice-to-Text Transcription Model
- Integrated speech-to-text model enabling users to add or update medical information through voice input.
- Converts spoken medical details into structured text ready for AI analysis.
- Improves accessibility for users who cannot type or are in urgent situations.

### 4. QR-Enabled Emergency Wristband
- Wristband contains a unique QR code linked to the user’s medical summary.
- EMTs can scan the QR code to instantly access essential health information.
- Works even if the patient is unconscious or unable to communicate.

### 5. Bluetooth Emergency Button
- A dedicated emergency button connects to the app via Bluetooth.
- When activated, it sends alerts to predefined emergency contacts.
- Automatically includes real-time GPS location.

### 6. Emergency Notification System
- Automated alerts via WhatsApp or SMS.
- Alert message includes:
  - User identity
  - Link to medical summary
  - GPS location
- Allows fast coordination during emergencies.

### 7. Privacy and Security
- Full data encryption for stored and transmitted information.
- Secure communication protocols.
- Role-based access control for emergency personnel.
- Follows general medical data protection standards.

---

## System Architecture

AMNI is built with a modular architecture composed of:

### 1. Mobile Application Layer
- Interface for profile management, file uploads, and AI-powered insights.
- Supports QR scanning and BLE-based device connectivity.
- Offers offline access to cached medical summaries.

### 2. AI Processing Layer
- **BioBERT NLP models** for:
  - Medical text understanding  
  - Extraction of conditions, medications, allergies  
  - Summarizing clinical documents  
- **Medication conflict detection engine**:
  - Analyzes current medication list against known interactions  
  - Flags conflicts and risk categories  
- **Allergy and sensitivity matcher**:
  - Cross-references medications and conditions against the allergy list  
- **Health-state analysis module**:
  - Evaluates patient stability and chronic disease burden  
- **CNN models** (optional) for analyzing uploaded scan types  
- **Speech-to-text model** for converting voice input to structured data  

### 3. Emergency Communication Layer
- WhatsApp Cloud API and SMS gateway integration.
- GPS synchronization and location-sharing module.
- Event-triggered notification logic.

### 4. Database and Storage Layer
- Encrypted cloud storage for all medical data.
- Authentication and user management.
- QR code mapping and emergency contact database.

### 5. Hardware Integration Layer
- BLE communication with the emergency button.
- QR wristband generation and validation.

---

## Project Structure

```
AMNI/
│
├── app/
│   ├── ui/
│   ├── components/
│   ├── services/
│   ├── bluetooth/
│   └── qr/
│
├── ai/
│   ├── summarizer/
│   │   ├── biobert_model/
│   │   └── preprocessing/
│   ├── medication_conflicts/
│   ├── allergy_detection/
│   ├── health_state_assessment/
│   ├── speech_to_text/
│   ├── cnn_classifier/
│   └── utils/
│
├── backend/
│   ├── api/
│   ├── authentication/
│   ├── database/
│   └── encryption/
│
├── docs/
│   ├── architecture-diagram.png
│   ├── system-overview.pdf
│   └── api-specifications.md
│
└── hardware/
    ├── emergency-button/
    └── qr-wristband/
```

---

## Technologies Used

### Mobile Application
- Flutter or React Native  
- BLE integration  
- QR generator and scanner libraries  

### Backend
- Node.js, FastAPI, or Django  
- RESTful API  
- Cloud-based encrypted storage solutions (AWS, Firebase, Azure)

### AI Components
- BioBERT for medical NLP  
- CNN models for scan analysis  
- Custom medication interaction and health-risk detection models  
- Speech-to-text transcription (Whisper or alternative models)  
- Python, PyTorch, TensorFlow

### Security
- AES or RSA encryption  
- JWT authentication  
- HTTPS data transmission  

### Communication Services
- WhatsApp Cloud API  
- Twilio SMS API  
- GPS location sharing  

---

## Purpose

AMNI is designed to reduce the time required for emergency responders to access critical medical information. By combining AI-driven medical analysis with hardware-assisted emergency alerts, the system provides a reliable framework for rapid medical intervention and improved emergency outcomes.

=======
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
>>>>>>> 2d1be31 (Create Front END Web Application)
