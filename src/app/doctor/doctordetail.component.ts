import { Component } from '@angular/core';
@Component({
    selector: 'app-doctor-detail',
    standalone: true,
    template: `
      <h3>Doctor Details</h3>
      <!-- <p>Name: {{ doctor.firstName }}</p>
      <p>Specialization: {{ doctor.specialization }}</p> -->
    `
  })
  export class DoctorDetailComponent {
    doctor: any;
    
  }