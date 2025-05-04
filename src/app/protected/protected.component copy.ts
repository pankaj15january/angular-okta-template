import { Component } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [ReactiveFormsModule, MatTableModule, MatInputModule, MatFormFieldModule],
  templateUrl: './protected.component.html',
  styleUrl: './protected.component.scss'
})
export class ProtectedComponent {
  displayedColumns: string[] = ['id', 'name', 'age'];  //['id', 'name', 'age'];  // Column names
  dataSource = new MatTableDataSource(DOCTOR_DATA);

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.loginForm = this.fb.group({
    //   name: ['id', 'name', 'age'] //['']
    // });
    this.loginForm = this.fb.group({
      id: ['', [Validators.required]],
      // email: ['', [Validators.required, Validators.email]],
      // phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      name: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
    }
  }

}

// Define data model
export interface Doctor {
  id: number;
  name: string;
  age: number;
}

// Sample data
const DOCTOR_DATA: Doctor[] = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 22 },
];
