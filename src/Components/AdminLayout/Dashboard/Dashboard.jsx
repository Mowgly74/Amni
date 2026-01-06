import React from 'react'
import style from"./Dashboard.module.css"
import { useState } from 'react';





export default function Dashboard() {
  const [filterDisease, setFilterDisease] = useState('all');
const [filterBodyPart, setFilterBodyPart] = useState('all');
  const mockPatientData = {
  id: 'P001',
  name: 'Ahmed Hassan',
  photo: 'https://via.placeholder.com/150',
  bloodType: 'A+',
  bloodPressure: { systolic: 130, diastolic: 85 },
  bloodSugar: 110,
  chronicDiseases: ['Diabetes Type 2', 'Hypertension'],
  bpHistory: [
    { date: '2025-01-01', systolic: 128, diastolic: 82 },
    { date: '2025-01-02', systolic: 132, diastolic: 86 },
    { date: '2025-01-03', systolic: 125, diastolic: 80 },
    { date: '2025-01-04', systolic: 130, diastolic: 85 }
  ],
  sugarHistory: [
    { date: '2025-01-01', level: 105 },
    { date: '2025-01-02', level: 115 },
    { date: '2025-01-03', level: 108 },
    { date: '2025-01-04', level: 110 }
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
  const filteredReports = mockPatientData.medicalReports.filter(report => {
      const diseaseMatch = filterDisease === 'all' || report.disease === filterDisease;
      const bodyPartMatch = filterBodyPart === 'all' || report.bodyPart === filterBodyPart;
      return diseaseMatch && bodyPartMatch;
    });

  return <>
    
    <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold">Patient Dashboard</h1>
            <button onClick={() => setCurrentPage('emergency-qr')} className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">View Emergency QR</button>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm mb-2">Blood Pressure</h3>
              <p className="text-2xl font-bold">{mockPatientData.bloodPressure.systolic}/{mockPatientData.bloodPressure.diastolic}</p>
              <p className="text-sm text-gray-600">mmHg</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm mb-2">Blood Sugar</h3>
              <p className="text-2xl font-bold">{mockPatientData.bloodSugar}</p>
              <p className="text-sm text-gray-600">mg/dL</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-gray-500 text-sm mb-2">Blood Type</h3>
              <p className="text-2xl font-bold">{mockPatientData.bloodType}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-xl font-bold mb-4">Chronic Diseases</h2>
            <div className="flex flex-wrap gap-2">
              {mockPatientData.chronicDiseases.map((disease, idx) => (
                <span key={idx} className="bg-red-100 text-red-700 px-4 py-2 rounded-full">{disease}</span>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-xl font-bold mb-4">Health Trends</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Blood Pressure History</h3>
                <div className="space-y-2">
                  {mockPatientData.bpHistory.map((record, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b pb-2">
                      <span className="text-sm text-gray-600">{record.date}</span>
                      <span className="font-semibold">{record.systolic}/{record.diastolic}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Blood Sugar History</h3>
                <div className="space-y-2">
                  {mockPatientData.sugarHistory.map((record, idx) => (
                    <div key={idx} className="flex justify-between items-center border-b pb-2">
                      <span className="text-sm text-gray-600">{record.date}</span>
                      <span className="font-semibold">{record.level} mg/dL</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Medical Reports</h2>
            <div className="flex gap-4 mb-6">
              <select value={filterDisease} onChange={(e) => setFilterDisease(e.target.value)} className="px-4 py-2 border rounded-lg">
                <option value="all">All Diseases</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Hypertension">Hypertension</option>
                <option value="Multiple">Multiple</option>
              </select>
              <select value={filterBodyPart} onChange={(e) => setFilterBodyPart(e.target.value)} className="px-4 py-2 border rounded-lg">
                <option value="all">All Body Parts</option>
                <option value="Heart">Heart</option>
                <option value="Pancreas">Pancreas</option>
                <option value="General">General</option>
              </select>
            </div>
            <div className="space-y-4">
              {filteredReports.map(report => (
                <div key={report.id} className={`p-4 rounded-lg border-l-4 ${report.isEmergency ? 'bg-red-50 border-red-500' : 'bg-gray-50 border-gray-300'}`}>
                  {report.isEmergency && <span className="bg-red-500 text-white text-xs px-2 py-1 rounded mb-2 inline-block">EMERGENCY PRIORITY</span>}
                  <h3 className="font-bold text-lg mb-2">{report.title}</h3>
                  <p className="text-gray-700">{report.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    
    </>
  
}
