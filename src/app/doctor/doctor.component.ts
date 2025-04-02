import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { DoctorListComponent } from "./doctorlist.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor',
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ReactiveFormsModule, DoctorListComponent, CommonModule],
  templateUrl: './doctor.component.html',
  styleUrl: './doctor.component.scss'
})
export class DoctorComponent {
  doctorForm: FormGroup;

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.doctorForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      // firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      specialization: ['', Validators.required],
    //  schedule: ['', [Validators.required ]],
     email: ['', [Validators.required, Validators.email]],
     phone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{10,15}$')]],
     availableDate: ['', Validators.required],
     message: ['']
    });
  }

  onSubmit(): void {
    if (this.doctorForm.valid) {
      this.dataService.saveDoctor(this.doctorForm.value).subscribe({
        next: (response) => {
          console.log('Doctor saved successfully', response);
          this.doctorForm.reset();
        },
        error: (error) => {
          console.error('Error saving doctor', error);
        }
      });
    }
  }
}
