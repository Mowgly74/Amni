import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Edit, Filter, QrCode, Activity, Heart, TrendingUp, 
  Plus, X, Save, AlertCircle 
} from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import style from './PatientDashboard.module.css';

// Mock patient data
const initialPatientData = {
  firstName: 'Ahmed',
  lastName: 'Hassan',
  email: 'ahmed.hassan@example.com',
  phone: '+20 123 456 7890',
  bloodType: 'A+',
  bloodPressure: { systolic: 130, diastolic: 85 },
  bloodSugar: 110,
  chronicDiseases: ['Diabetes Type 2', 'Hypertension'],
  emergencyContact: '+20 123 456 7890',
  bpHistory: [
    { date: '01/01', systolic: 128, diastolic: 82 },
    { date: '01/02', systolic: 132, diastolic: 86 },
    { date: '01/03', systolic: 125, diastolic: 80 },
    { date: '01/04', systolic: 130, diastolic: 85 },
    { date: '01/05', systolic: 128, diastolic: 83 },
    { date: '01/06', systolic: 135, diastolic: 88 }
  ],
  sugarHistory: [
    { date: '01/01', level: 105 },
    { date: '01/02', level: 115 },
    { date: '01/03', level: 108 },
    { date: '01/04', level: 110 },
    { date: '01/05', level: 112 },
    { date: '01/06', level: 118 }
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

export default function PatientDashboard() {
  const navigate = useNavigate();
  const [patientData, setPatientData] = useState(initialPatientData);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(patientData);
  const [filterDisease, setFilterDisease] = useState('all');
  const [filterBodyPart, setFilterBodyPart] = useState('all');

  const handleEdit = () => {
    setEditData({ ...patientData });
    setIsEditing(true);
  };

  const handleSave = () => {
    setPatientData(editData);
    setIsEditing(false);
    // In production, this would make an API call
  };

  const handleCancel = () => {
    setEditData(patientData);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setEditData({
      ...editData,
      [field]: value
    });
  };

  const handleNestedInputChange = (parent, field, value) => {
    setEditData({
      ...editData,
      [parent]: {
        ...editData[parent],
        [field]: value
      }
    });
  };

  // Filter reports
  const filteredReports = patientData.medicalReports.filter(report => {
    const diseaseMatch = filterDisease === 'all' || report.disease === filterDisease;
    const bodyPartMatch = filterBodyPart === 'all' || report.bodyPart === filterBodyPart;
    return diseaseMatch && bodyPartMatch;
  });

  // Get unique diseases and body parts
  const uniqueDiseases = ['all', ...new Set(patientData.medicalReports.map(r => r.disease))];
  const uniqueBodyParts = ['all', ...new Set(patientData.medicalReports.map(r => r.bodyPart))];

  // Prepare chart data
  const chartData = patientData.bpHistory.map((bp, idx) => ({
    date: bp.date,
    systolic: bp.systolic,
    diastolic: bp.diastolic,
    sugar: patientData.sugarHistory[idx]?.level || 0
  }));

  return (
    <div className={style.dashboardContainer}>
      <div className={style.header}>
        <div>
          <h1 className={style.title}>Patient Dashboard</h1>
          <p className={style.subtitle}>Manage your medical information</p>
        </div>
        <div className={style.headerActions}>
          <button 
            onClick={() => navigate('/report')}
            className={style.qrButton}
          >
            <QrCode className={style.buttonIcon} />
            View Emergency QR
          </button>
          {!isEditing ? (
            <button onClick={handleEdit} className={style.editButton}>
              <Edit className={style.buttonIcon} />
              Edit Profile
            </button>
          ) : (
            <div className={style.editActions}>
              <button onClick={handleSave} className={style.saveButton}>
                <Save className={style.buttonIcon} />
                Save
              </button>
              <button onClick={handleCancel} className={style.cancelButton}>
                <X className={style.buttonIcon} />
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Personal Information */}
      <div className={style.section}>
        <h2 className={style.sectionTitle}>Personal Information</h2>
        <div className={style.infoGrid}>
          <div className={style.infoGroup}>
            <label className={style.infoLabel}>First Name</label>
            {isEditing ? (
              <input
                type="text"
                value={editData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className={style.input}
              />
            ) : (
              <p className={style.infoValue}>{patientData.firstName}</p>
            )}
          </div>
          <div className={style.infoGroup}>
            <label className={style.infoLabel}>Last Name</label>
            {isEditing ? (
              <input
                type="text"
                value={editData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className={style.input}
              />
            ) : (
              <p className={style.infoValue}>{patientData.lastName}</p>
            )}
          </div>
          <div className={style.infoGroup}>
            <label className={style.infoLabel}>Email</label>
            {isEditing ? (
              <input
                type="email"
                value={editData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={style.input}
              />
            ) : (
              <p className={style.infoValue}>{patientData.email}</p>
            )}
          </div>
          <div className={style.infoGroup}>
            <label className={style.infoLabel}>Phone</label>
            {isEditing ? (
              <input
                type="tel"
                value={editData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={style.input}
              />
            ) : (
              <p className={style.infoValue}>{patientData.phone}</p>
            )}
          </div>
          <div className={style.infoGroup}>
            <label className={style.infoLabel}>Blood Type</label>
            {isEditing ? (
              <select
                value={editData.bloodType}
                onChange={(e) => handleInputChange('bloodType', e.target.value)}
                className={style.input}
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            ) : (
              <p className={style.infoValue}>{patientData.bloodType}</p>
            )}
          </div>
          <div className={style.infoGroup}>
            <label className={style.infoLabel}>Emergency Contact</label>
            {isEditing ? (
              <input
                type="tel"
                value={editData.emergencyContact}
                onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                className={style.input}
              />
            ) : (
              <p className={style.infoValue}>{patientData.emergencyContact}</p>
            )}
          </div>
        </div>
      </div>

      {/* Critical Medical Data */}
      <div className={style.criticalDataSection}>
        <div className={style.dataBox}>
          <div className={style.dataBoxHeader}>
            <Activity className={style.dataIcon} />
            <h3>Blood Pressure</h3>
          </div>
          {isEditing ? (
            <div className={style.editDataBox}>
              <div>
                <label className={style.dataLabel}>Systolic</label>
                <input
                  type="number"
                  value={editData.bloodPressure.systolic}
                  onChange={(e) => handleNestedInputChange('bloodPressure', 'systolic', parseInt(e.target.value))}
                  className={style.dataInput}
                />
              </div>
              <div>
                <label className={style.dataLabel}>Diastolic</label>
                <input
                  type="number"
                  value={editData.bloodPressure.diastolic}
                  onChange={(e) => handleNestedInputChange('bloodPressure', 'diastolic', parseInt(e.target.value))}
                  className={style.dataInput}
                />
              </div>
            </div>
          ) : (
            <div className={style.dataValue}>
              <span className={style.mainValue}>
                {patientData.bloodPressure.systolic}/{patientData.bloodPressure.diastolic}
              </span>
              <span className={style.unit}>mmHg</span>
            </div>
          )}
        </div>

        <div className={style.dataBox}>
          <div className={style.dataBoxHeader}>
            <Heart className={style.dataIcon} />
            <h3>Blood Sugar</h3>
          </div>
          {isEditing ? (
            <div className={style.editDataBox}>
              <label className={style.dataLabel}>Level (mg/dL)</label>
              <input
                type="number"
                value={editData.bloodSugar}
                onChange={(e) => handleInputChange('bloodSugar', parseInt(e.target.value))}
                className={style.dataInput}
              />
            </div>
          ) : (
            <div className={style.dataValue}>
              <span className={style.mainValue}>{patientData.bloodSugar}</span>
              <span className={style.unit}>mg/dL</span>
            </div>
          )}
        </div>
      </div>

      {/* Chronic Diseases */}
      <div className={style.section}>
        <h2 className={style.sectionTitle}>Chronic Diseases</h2>
        {isEditing ? (
          <div className={style.diseasesEdit}>
            {editData.chronicDiseases.map((disease, idx) => (
              <div key={idx} className={style.diseaseEditItem}>
                <input
                  type="text"
                  value={disease}
                  onChange={(e) => {
                    const newDiseases = [...editData.chronicDiseases];
                    newDiseases[idx] = e.target.value;
                    handleInputChange('chronicDiseases', newDiseases);
                  }}
                  className={style.input}
                />
                <button
                  onClick={() => {
                    const newDiseases = editData.chronicDiseases.filter((_, i) => i !== idx);
                    handleInputChange('chronicDiseases', newDiseases);
                  }}
                  className={style.removeButton}
                >
                  <X className={style.smallIcon} />
                </button>
              </div>
            ))}
            <button
              onClick={() => {
                handleInputChange('chronicDiseases', [...editData.chronicDiseases, '']);
              }}
              className={style.addButton}
            >
              <Plus className={style.smallIcon} />
              Add Disease
            </button>
          </div>
        ) : (
          <div className={style.diseasesList}>
            {patientData.chronicDiseases.length > 0 ? (
              patientData.chronicDiseases.map((disease, idx) => (
                <span key={idx} className={style.diseaseBadge}>{disease}</span>
              ))
            ) : (
              <p className={style.noData}>No chronic diseases recorded</p>
            )}
          </div>
        )}
      </div>

      {/* Health Trends Charts */}
      <div className={style.section}>
        <h2 className={style.sectionTitle}>Health Trends</h2>
        <div className={style.chartsGrid}>
          <div className={style.chartCard}>
            <h3 className={style.chartTitle}>Blood Pressure History</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="systolic" stroke="#ef4444" strokeWidth={2} name="Systolic" />
                <Line type="monotone" dataKey="diastolic" stroke="#dc2626" strokeWidth={2} name="Diastolic" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className={style.chartCard}>
            <h3 className={style.chartTitle}>Blood Sugar History</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={patientData.sugarHistory}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="level" fill="#3b82f6" name="Blood Sugar (mg/dL)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Medical Reports */}
      <div className={style.section}>
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

        <div className={style.reportsList}>
          {filteredReports.map(report => (
            <div 
              key={report.id} 
              className={`${style.reportCard} ${report.isEmergency ? style.emergencyReport : ''}`}
            >
              {report.isEmergency && (
                <div className={style.emergencyBadge}>
                  <AlertCircle className={style.badgeIcon} />
                  EMERGENCY PRIORITY
                </div>
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
      </div>
    </div>
  );
}

