// /*import { Component, OnInit } from '@angular/core';
// import { DataService } from '../services/data.service';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { PaginatePipe } from './paginate.pipe';
// // import { PaginatePipe, PaginationService } from 'ngx-pagination';
// import { PaginationService } from 'ngx-pagination';

// @Component({
//   selector: 'app-protected',
//   standalone: true,
//   templateUrl: './protected.component.html',
//   styleUrls: ['./protected.component.scss'],
//   schemas: [CUSTOM_ELEMENTS_SCHEMA],
//   // imports: [PaginatePipe],
//   imports: [CommonModule, PaginatePipe ],
//   // pipes: [PaginatePipe]
// })
// export class ProtectedComponent {

//   patients:any[] = [];
//   doctor:any;
//   appointment:any;
//   currentPage:any = 1; // Default page
//   itemsPerPage = 1; // Items per page

//   constructor(private dataService:DataService) {}

  

//     ngOnInit() {
      

//       this.loadPage();

//       // this.dataService.getData()

//       //   .subscribe(response => {
//       //     alert(JSON.stringify(response));
//       //     this.patient = JSON.stringify(response);

//       //   });
//       // this.dataService.getPatient()
//       //   .subscribe(response => {          
//       //     this.patient = response; //JSON.stringify(response);

//       //   });

//         // this.dataService.getDoctor()
//         // .subscribe(response => {          
//         //   this.doctor = JSON.stringify(response);

//         // });

//         // this.dataService.getAppointment()
//         // .subscribe(response => {          
//         //   this.appointment = JSON.stringify(response);

//         // });

//   }

//   loadPage() {
//     this.dataService.getPatient()
//         .subscribe(response => {          
//           this.patients = response; //JSON.stringify(response);

//         });
//   }

//   // pageChange(newPage: number) {
//   //   this.currentPage = newPage;
//   //   this.loadPage();
//   // }

//   get totalPages(): number {
//     return Math.ceil(this.patients.length / this.itemsPerPage);
//   }

// }*/
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { MatTableModule } from '@angular/material/table';

import { CommonModule } from '@angular/common';
import { PaginatePipe } from './paginate.pipe';
import { DataService } from '../services/data.service';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-patient',
  standalone: true,
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss'],
  // imports: [CommonModule, PaginatePipe ],
  imports: [MatTableModule, CommonModule, PaginatePipe, ReactiveFormsModule],
  // imports: [ReactiveFormsModule, DoctorListComponent, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class PatientComponent implements AfterViewInit {
  isCreating = false;
  patientForm: FormGroup;
  doctors: Doctor[] = [];
  // displayedColumns: string[] = ['firstName', 'lastName', 'birthday', 'phoneNumber'];
  displayedColumns: string[] = ['id', 'name', 'age', 'gender', 'birthday', 'phonenumber', 'email', 'appointments', 'comments'];  //['id', 'name', 'age'];  // Column names
  // displayedColumns: string[] = ['name', 'age', 'email'];
  // dataSource = new MatTableDataSource(USER_DATA);
  // dataSource:any;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  patients: any[] = [];

  // appointment:any;
  // currentPage:any = 1; // Default page
  // itemsPerPage = 1; // Items per page

  constructor(private fb: FormBuilder, private dataService: DataService) {
    this.patientForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      birthday: ['', Validators.required],
      gender: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{10,15}$')]],
      streetAddress: ['', Validators.required],
      postcode: ['', Validators.required],
      billing: ['', Validators.required],
      doctorId: ['', Validators.required],
      profilePicturePath: ['', Validators.required],
      // conditionImage: [[], Validators.required], 
      // conditionImage: this.fb.array([this.fb.control('', Validators.required)]) ,  
      conditionImage: this.fb.array([
        this.fb.control(''), // initial string values can be added here
      ]),   
      appointments: ['', Validators.required],      
      condition: ['', Validators.required],
      conditionURI: ['', Validators.required],
      comments: ['', Validators.required]
      //  schedule: ['', [Validators.required ]],
      //  email: ['', [Validators.required, Validators.email]],
    });
  }

  // ngOnInit() {
  //   this.loadPage();    
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.sort;    
  // }

  ngAfterViewInit() {
    this.loadPage();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  loadPage() {
    this.dataService.getPatient()
      .subscribe(response => {
        this.patients = response;     //JSON.stringify(response);
        this.dataSource = new MatTableDataSource(response);
      });

    this.dataService.getDoctors()
      .subscribe(response => {
        this.doctors = response;
      });
  }

  items = ['Item 1', 'Item 2', 'Item 3'];
  addItem(newItem: string) {
    if (newItem) {
      this.items.push(newItem);
      this.isCreating = false; // hide the form after adding
    }
  }

  onSubmit(): void {
    alert(JSON.stringify(this.patientForm.value));
    // if (this.patientForm.valid) {
      this.dataService.savePatient(this.patientForm.value).subscribe({
        next: (response) => {
          console.log('Patient saved successfully', response);
          this.isCreating = false;
          this.patientForm.reset();
        },
        error: (error) => {
          console.error('Error saving patient', error);
        }
      });
    // }
  }

  // get totalPages(): number {
  //   return Math.ceil(this.patients.length / this.itemsPerPage);
  // }

  toggleCreateMode() {
    this.isCreating = !this.isCreating;
    this.patientForm.reset();
  }

}

// import { Component, ViewChild, AfterViewInit } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';

interface Doctor {
  "doctorId": string,
  "firstName": string,
  "lastName": string,
  "specialization": string,
  "schedule": string
}

interface User {
  name: string;
  age: number;
  email: string;
}


const USER_DATA: User[] = [
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
  { name: 'Charlie', age: 35, email: 'charlie@example.com' },
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
  { name: 'Charlie', age: 35, email: 'charlie@example.com' },
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
  { name: 'Charlie', age: 35, email: 'charlie@example.com' },
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
  { name: 'Charlie', age: 35, email: 'charlie@example.com' },
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
  { name: 'Charlie', age: 35, email: 'charlie@example.com' },
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
  { name: 'Charlie', age: 35, email: 'charlie@example.com' },
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
  { name: 'Charlie', age: 35, email: 'charlie@example.com' },
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
  { name: 'Charlie', age: 35, email: 'charlie@example.com' },
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
  { name: 'Charlie', age: 35, email: 'charlie@example.com' },
  { name: 'Alice', age: 25, email: 'alice@example.com' },
  { name: 'Bob', age: 30, email: 'bob@example.com' },
  { name: 'Charlie', age: 35, email: 'charlie@example.com' },
];
