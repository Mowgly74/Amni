import React, { useState } from 'react';
import { AlertCircle, MapPin, Phone, Heart, Activity, Filter } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import style from './EmergencyQR.module.css';

// Mock data - in production, this would come from API based on QR code
const mockPatientData = {
  id: 'P001',
  firstName: 'Ahmed',
  lastName: 'Hassan',
  photo: 'https://via.placeholder.com/150',
  bloodType: 'A+',
  bloodPressure: { systolic: 130, diastolic: 85 },
  bloodSugar: 110,
  chronicDiseases: ['Diabetes Type 2', 'Hypertension'],
  emergencyContact: '+20 121 073 5537',
  bpHistory: [
    { date: '01/01', systolic: 128, diastolic: 82 },
    { date: '01/02', systolic: 132, diastolic: 86 },
    { date: '01/03', systolic: 125, diastolic: 80 },
    { date: '01/04', systolic: 130, diastolic: 85 },
    { date: '01/05', systolic: 128, diastolic: 83 }
  ],
  sugarHistory: [
    { date: '01/01', level: 105 },
    { date: '01/02', level: 115 },
    { date: '01/03', level: 108 },
    { date: '01/04', level: 110 },
    { date: '01/05', level: 112 }
  ],
  medicalReports: [
    {
      id: 1,
      title: 'CRITICAL EMERGENCY SUMMARY',
      isEmergency: true,
      disease: 'Multiple',
      bodyPart: 'General',
      content: 'PATIENT IS DIABETIC & HYPERTENSIVE. Risk of hypoglycemia if unconscious. Current BP: 130/85 (Elevated). Blood Sugar: 110 mg/dL (Controlled). ALLERGIES: Penicillin. Last medication: Metformin 500mg, Lisinopril 10mg. Contact: Emergency contact +20 123 456 7890'
    },
    {
      id: 2,
      title: 'Diabetes Management Report',
      disease: 'Diabetes',
      bodyPart: 'Pancreas',
      content: 'Patient diagnosed with Type 2 Diabetes in 2018. Currently on Metformin 500mg twice daily. Recent HbA1c: 7.2%. Blood sugar levels show good control with occasional spikes after meals.'
    },
    {
      id: 3,
      title: 'Cardiovascular Assessment',
      disease: 'Hypertension',
      bodyPart: 'Heart',
      content: 'Hypertension diagnosed in 2020. Taking Lisinopril 10mg daily. Blood pressure readings show consistent control within acceptable range. No history of heart attack or stroke.'
    }
  ]
};

export default function EmergencyQR() {
  const [filterDisease, setFilterDisease] = useState('all');
  const [filterBodyPart, setFilterBodyPart] = useState('all');
  const [currentLocation, setCurrentLocation] = useState(null);

  // Get user location for WhatsApp sharing
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  // Share location via WhatsApp
  const shareLocation = () => {
    if (currentLocation) {
      const message = `Emergency Location: https://www.google.com/maps?q=${currentLocation.lat},${currentLocation.lng}`;
      const whatsappUrl = `https://wa.me/${mockPatientData.emergencyContact.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } else {
      getLocation();
      setTimeout(() => {
        if (currentLocation) {
          shareLocation();
        }
      }, 1000);
    }
  };

  // Emergency alert button
  const handleEmergencyAlert = () => {
    const message = `EMERGENCY ALERT: ${mockPatientData.firstName} ${mockPatientData.lastName} needs immediate medical assistance!`;
    const whatsappUrl = `https://wa.me/${mockPatientData.emergencyContact.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Filter reports
  const filteredReports = mockPatientData.medicalReports.filter(report => {
    const diseaseMatch = filterDisease === 'all' || report.disease === filterDisease;
    const bodyPartMatch = filterBodyPart === 'all' || report.bodyPart === filterBodyPart;
    return diseaseMatch && bodyPartMatch;
  });

  // Get unique diseases and body parts for filters
  const uniqueDiseases = ['all', ...new Set(mockPatientData.medicalReports.map(r => r.disease))];
  const uniqueBodyParts = ['all', ...new Set(mockPatientData.medicalReports.map(r => r.bodyPart))];

  // Prepare chart data
  const chartData = mockPatientData.bpHistory.map((bp, idx) => ({
    date: bp.date,
    systolic: bp.systolic,
    diastolic: bp.diastolic,
    sugar: mockPatientData.sugarHistory[idx]?.level || 0
  }));

  return (
    <div className={style.emergencyContainer}>
      {/* Patient Photo and Name Section */}
      <div className={style.headerSection}>
        <div className={style.photoContainer}>
          <img 
            src={mockPatientData.photo} 
            alt={`${mockPatientData.firstName} ${mockPatientData.lastName}`}
            className={style.patientPhoto}
          />
        </div>
        <div className={style.nameSection}>
          <h1 className={style.patientName}>
            {mockPatientData.firstName} {mockPatientData.lastName}
          </h1>
          <div className={style.emergencyButtons}>
            <button 
              onClick={handleEmergencyAlert}
              className={style.emergencyButton}
              aria-label="Emergency Alert"
            >
              <AlertCircle className={style.buttonIcon} />
              <span>Emergency Alert</span>
            </button>
            <button 
              onClick={shareLocation}
              className={style.locationButton}
              aria-label="Send Location"
            >
              <MapPin className={style.buttonIcon} />
              <span>Send Location</span>
            </button>
          </div>
        </div>
      </div>

      {/* Critical Medical Data Boxes */}
      <div className={style.criticalDataSection}>
        <div className={style.dataBox}>
          <div className={style.dataBoxHeader}>
            <Activity className={style.dataIcon} />
            <h3>Blood Pressure</h3>
          </div>
          <div className={style.dataValue}>
            <span className={style.mainValue}>
              {mockPatientData.bloodPressure.systolic}/{mockPatientData.bloodPressure.diastolic}
            </span>
            <span className={style.unit}>mmHg</span>
          </div>
        </div>

        <div className={style.dataBox}>
          <div className={style.dataBoxHeader}>
            <Heart className={style.dataIcon} />
            <h3>Blood Sugar</h3>
          </div>
          <div className={style.dataValue}>
            <span className={style.mainValue}>{mockPatientData.bloodSugar}</span>
            <span className={style.unit}>mg/dL</span>
          </div>
        </div>
      </div>

      {/* Blood Type */}
      <div className={style.bloodTypeSection}>
        <h2 className={style.sectionTitle}>Blood Type</h2>
        <div className={style.bloodTypeBadge}>{mockPatientData.bloodType}</div>
      </div>

      {/* Chronic Diseases */}
      {mockPatientData.chronicDiseases.length > 0 && (
        <div className={style.chronicDiseasesSection}>
          <h2 className={style.sectionTitle}>Chronic Diseases</h2>
          <div className={style.diseasesList}>
            {mockPatientData.chronicDiseases.map((disease, idx) => (
              <span key={idx} className={style.diseaseBadge}>{disease}</span>
            ))}
          </div>
        </div>
      )}

      {/* Health Trends Graph */}
      <div className={style.graphSection}>
        <h2 className={style.sectionTitle}>Recent Health Trends</h2>
        <div className={style.chartContainer}>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" label={{ value: 'BP (mmHg)', angle: -90, position: 'insideLeft' }} />
              <YAxis yAxisId="right" orientation="right" label={{ value: 'Sugar (mg/dL)', angle: 90, position: 'insideRight' }} />
              <Tooltip />
              <Line yAxisId="left" type="monotone" dataKey="systolic" stroke="#ef4444" strokeWidth={2} name="Systolic BP" />
              <Line yAxisId="left" type="monotone" dataKey="diastolic" stroke="#dc2626" strokeWidth={2} name="Diastolic BP" />
              <Line yAxisId="right" type="monotone" dataKey="sugar" stroke="#3b82f6" strokeWidth={2} name="Blood Sugar" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Filter Section */}
      <div className={style.filterSection}>
        <h2 className={style.sectionTitle}>Medical Reports</h2>
        <div className={style.filters}>
          <div className={style.filterGroup}>
            <Filter className={style.filterIcon} />
            <label htmlFor="diseaseFilter" className={style.filterLabel}>Filter by Disease:</label>
            <select 
              id="diseaseFilter"
              value={filterDisease} 
              onChange={(e) => setFilterDisease(e.target.value)}
              className={style.filterSelect}
            >
              {uniqueDiseases.map(disease => (
                <option key={disease} value={disease}>
                  {disease === 'all' ? 'All Diseases' : disease}
                </option>
              ))}
            </select>
          </div>
          <div className={style.filterGroup}>
            <Filter className={style.filterIcon} />
            <label htmlFor="bodyPartFilter" className={style.filterLabel}>Filter by Body Part:</label>
            <select 
              id="bodyPartFilter"
              value={filterBodyPart} 
              onChange={(e) => setFilterBodyPart(e.target.value)}
              className={style.filterSelect}
            >
              {uniqueBodyParts.map(part => (
                <option key={part} value={part}>
                  {part === 'all' ? 'All Body Parts' : part}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Medical Reports - Emergency Summary First */}
      <div className={style.reportsSection}>
        {filteredReports.map(report => (
          <div 
            key={report.id} 
            className={`${style.reportCard} ${report.isEmergency ? style.emergencyReport : ''}`}
          >
            {report.isEmergency && (
              <div className={style.emergencyBadge}>EMERGENCY PRIORITY</div>
            )}
            <h3 className={style.reportTitle}>{report.title}</h3>
            <div className={style.reportMeta}>
              <span className={style.reportMetaItem}>Disease: {report.disease}</span>
              <span className={style.reportMetaItem}>Body Part: {report.bodyPart}</span>
            </div>
            <p className={style.reportContent}>{report.content}</p>
          </div>
        ))}
      </div>

      {/* Emergency Contact Footer */}
      <div className={style.emergencyFooter}>
        <Phone className={style.footerIcon} />
        <div>
          <p className={style.footerLabel}>Emergency Contact</p>
          <a href={`tel:${mockPatientData.emergencyContact}`} className={style.footerContact}>
            {mockPatientData.emergencyContact}
          </a>
        </div>
      </div>
    </div>
  );
}

