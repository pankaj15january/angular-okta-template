import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ProfileComponent implements OnInit {

  doctors:any;
  constructor(private dataService:DataService) {}

  ngOnInit() {
    this.loadPage(); 

  }

  loadPage() {
      this.dataService.getDoctors()
          .subscribe(response => {     
            this.doctors = response;            
          });
      // this.doctors = this.doctor;
    }

  doctor= [{
    name: 'Dr. Ashutosh Kumar Jha',
    specialization: 'Orthodontist',
    experience: 10,
    location: '123 Smile Avenue, Dental City',
    contact: '+1 234 567 890',
    image: 'https://via.placeholder.com/150', // Replace with actual image URL
    services: ['Teeth Cleaning', 'Orthodontic Braces', 'Root Canal', 'Teeth Whitening'],
    reviews: [
      {
        patientName: 'John Doe',
        comment: 'Amazing experience! Highly recommend.',
        rating: 5
      },
      {
        patientName: 'Jane Smith',
        comment: 'Very professional and kind.',
        rating: 4
      }
    ]
  }];
}









