// src/app/services/patient.service.ts
import { Injectable } from '@angular/core';
import { Patient } from '../models/patient-model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private patients: Patient[] = [];
  private idCounter = 1;

  getPatients(): Patient[] {
    return this.patients;
  }

  addPatient(patient: Omit<Patient, 'id'>): void {
    const newPatient: Patient = { ...patient, id: this.idCounter++ };
    this.patients.push(newPatient);
  }
}
