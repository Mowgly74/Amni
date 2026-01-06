import React from 'react';
import EmergencyQR from '../EmergencyQR/EmergencyQR';
import style from './Report.module.css';

export default function Report() {
  return (
    <div className={style.reportContainer}>
      <EmergencyQR />
    </div>
  );
}
