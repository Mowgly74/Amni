# AMNI: AI-Driven Medical Emergency System

AMNI is an integrated medical emergency support system designed to provide first responders with immediate access to critical health information. It combines a mobile application, a QR-enabled wristband, and a Bluetooth emergency button to deliver rapid, reliable, and secure emergency assistance. The system leverages AI models for medical text summarization as well as analysis and ensures secure data handling for sensitive health records.

---

## Key Features

### 1. Digital Medical Profile
- Users can create and update comprehensive medical profiles.
- Supports uploading medical reports, laboratory results, and radiology scans.
- All data is securely stored with encryption.

### 2. AI-Based Medical Summarization
- Utilizes BioBERT and CNN-based models to generate concise, clinically relevant summaries.
- Summaries are optimized for rapid review by EMTs and medical staff.
- Extracts key medical conditions, allergies, medications, and recent diagnostic findings.

### 3. QR-Enabled Emergency Wristband
- Wristband contains a unique QR code linked to the user's AI-generated medical summary.
- EMTs can scan the QR code to instantly access emergency-critical information.
- Accessible even if the user is unconscious or unable to speak.

### 4. Bluetooth Emergency Button
- A dedicated button connected to the mobile device via Bluetooth.
- Sends automatic alerts via WhatsApp or SMS to predefined emergency contacts.
- Includes real-time GPS location sharing for fast response.

### 5. Emergency Notification System
- Supports SMS and WhatsApp message automation.
- Sends customizable alerts with user identity, medical summary link, and live location.

### 6. Speech-to-Text Input
- Users can add or update medical information through voice input.
- Seamlessly integrated into the medical profile creation workflow.

### 7. Privacy and Security
- Implements data encryption for all stored and transmitted information.
- Utilizes secure communication protocols.
- Ensures compliance with general data protection guidelines.

---

## System Architecture

AMNI is built around a modular, scalable architecture consisting of:

### 1. Mobile Application Layer
- User interface for profile management, uploading medical documents, and AI interactions.
- Handles QR code scanning and Bluetooth device pairing.
- Supports offline access to essential user data.

### 2. AI Processing Layer
- BioBERT-based natural language processing for medical text understanding.
- CNN models for feature extraction from uploaded scans.
- Generates structured medical summaries for emergency use.

### 3. Emergency Communication Layer
- WhatsApp API or Twilio/SMS gateway integration.
- GPS data integration for location sharing.
- Notification scheduling and delivery logic.

### 4. Database and Storage Layer
- Encrypted cloud-based storage for medical records.
- Secure user authentication and role-based access control.
- Stores QR code mappings, emergency contacts, and summaries.

### 5. Hardware Integration Layer
- Bluetooth Low Energy (BLE) communication with the emergency button.
- QR wristband generated via unique device identifier bound to user profile.

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
- BLE APIs for Bluetooth integration  
- QR generation and scanning libraries  

### Backend
- Node.js, Django, or FastAPI  
- RESTful API architecture  
- Encrypted cloud storage (AWS, Firebase, or Azure)

### AI Components
- BioBERT for medical natural language processing  
- CNN architectures for scan analysis  
- Python, PyTorch, TensorFlow

### Security
- AES or RSA-based encryption  
- Token-based authentication (JWT)  
- Secure HTTPS communication

### Communication Services
- WhatsApp Cloud API  
- Twilio SMS API  
- GPS location services

---

## Purpose

AMNI is designed to reduce the time required for emergency responders to access vital medical information. By combining artificial intelligence with secure and user-friendly hardware, the system provides a reliable framework for timely medical intervention, especially in life-threatening situations.
