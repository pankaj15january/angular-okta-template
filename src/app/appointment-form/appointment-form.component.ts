import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-appointment-form',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './appointment-form.component.html',
  styleUrl: './appointment-form.component.scss'
})
export class AppointmentFormComponent {
  appointmentForm: FormGroup;
  doctors: Doctor[] = [];
  // doctors = [];

  constructor(private fb: FormBuilder, private dataService:DataService) {
    // this.dataService.getDoctors().subscribe(docs => this.doctors = docs);
    

    this.appointmentForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      doctorId: ['doctor'], // Default selected value
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      preferredDate: ['', Validators.required],
      preferredTime: ['', Validators.required],
      message: ['']
    });
  }

  ngOnInit() {
    this.dataService.getDoctors().subscribe(docs => this.doctors = docs);
    // this.doctor = JSON.stringify(this.doctors[0]);
  }

  bookAppointment() {
    if (this.appointmentForm.valid) {
      this.dataService.saveAppointment(this.appointmentForm.value).subscribe({
        next: (response) => {
          console.log('Appointment saved successfully', response);
          this.appointmentForm.reset();
        },
        error: (error) => {
          this.appointmentForm.markAllAsTouched();
          console.error('Error saving appointment', error);
        }
      });
    }
  }
}

// interface Doctor {
//   name: string;
//   age: number;
//   email: string;
// }
interface Doctor {
  "doctorId": string,
  "firstName": string,
  "lastName": string,
  "specialization": string,
  "schedule": string
}
