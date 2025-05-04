import { Component } from '@angular/core';
import { PatientService } from '../services/patient.service';

import { Patient } from './moldels/patient.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.scss'
})
export class ProtectedComponent {
  
  name = '';
  age!: number;
  condition = '';

  constructor(public patientService: PatientService) {}

  addPatient(): void {
    if (this.name && this.age && this.condition) {
      this.patientService.addPatient({
        name: this.name,
        age: this.age,
        condition: this.condition
      });

      this.name = '';
      this.age = 0;
      this.condition = '';
    }
  }

  get patients(): Patient[] {
    return this.patientService.getPatients();
  }

}

// export interface Patient {
//   id: number;
//   name: string;
//   age: number;
//   condition: string;
// }
