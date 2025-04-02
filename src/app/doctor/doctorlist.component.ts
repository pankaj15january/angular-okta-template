import { Component } from '@angular/core';
import { DoctorDetailComponent } from './doctordetail.component';
// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { MatTableModule } from '@angular/material/table';

import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-doctor-list',
  imports: [DoctorDetailComponent, CommonModule],
  standalone: true,
  templateUrl: './doctorlist.component.html',
  styles: [`
    ul { list-style-type: none; padding: 0; }
    li { cursor: pointer; padding: 5px; border-bottom: 1px solid #ccc; }
    li:hover { background-color: #f0f0f0; }
  `]
})
export class DoctorListComponent {

  constructor(private dataService:DataService) {}
  // doctors: Doctor[] =[
  //   { name: 'Dr. Smith', specialization: 'Cardiologist' },
  //   { name: 'Dr. Jane', specialization: 'Dermatologist' },
  //   { name: 'Dr. Brown', specialization: 'Neurologist' }
  // ];
 
  selectedDoctor: any;
  doctors: any;

  selectDoctor(doctor: any) {
    this.selectedDoctor = doctor;
  }

  ngOnInit(): void {
    this.dataService.getDoctors().subscribe((data) => {
      this.doctors = data;
    });
  }

}
