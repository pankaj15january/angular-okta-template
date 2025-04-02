/*import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginatePipe } from './paginate.pipe';
// import { PaginatePipe, PaginationService } from 'ngx-pagination';
import { PaginationService } from 'ngx-pagination';

@Component({
  selector: 'app-protected',
  standalone: true,
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // imports: [PaginatePipe],
  imports: [CommonModule, PaginatePipe ],
  // pipes: [PaginatePipe]
})
export class ProtectedComponent {

  patients:any[] = [];
  doctor:any;
  appointment:any;
  currentPage:any = 1; // Default page
  itemsPerPage = 1; // Items per page

  constructor(private dataService:DataService) {}

  

    ngOnInit() {
      

      this.loadPage();

      // this.dataService.getData()

      //   .subscribe(response => {
      //     alert(JSON.stringify(response));
      //     this.patient = JSON.stringify(response);

      //   });
      // this.dataService.getPatient()
      //   .subscribe(response => {          
      //     this.patient = response; //JSON.stringify(response);

      //   });

        // this.dataService.getDoctor()
        // .subscribe(response => {          
        //   this.doctor = JSON.stringify(response);

        // });

        // this.dataService.getAppointment()
        // .subscribe(response => {          
        //   this.appointment = JSON.stringify(response);

        // });

  }

  loadPage() {
    this.dataService.getPatient()
        .subscribe(response => {          
          this.patients = response; //JSON.stringify(response);

        });
  }

  // pageChange(newPage: number) {
  //   this.currentPage = newPage;
  //   this.loadPage();
  // }

  get totalPages(): number {
    return Math.ceil(this.patients.length / this.itemsPerPage);
  }

}*/
import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { MatTableModule } from '@angular/material/table';

import { CommonModule } from '@angular/common';
import { PaginatePipe } from './paginate.pipe';
import { DataService } from '../services/data.service';
@Component({
selector: 'app-appointment',
  standalone: true,
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss'],
  // imports: [CommonModule, PaginatePipe ],
  imports: [MatTableModule, CommonModule, PaginatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class AppointmentComponent implements AfterViewInit {
  displayedColumns: string[] = ['firstName', 'lastName', 'birthday', 'phoneNumber'];
  // displayedColumns: string[] = ['name', 'age', 'email'];
  // dataSource = new MatTableDataSource(USER_DATA);
  // dataSource:any;
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  patients:any[] = [];
  doctors:any;
  // appointment:any;
  // currentPage:any = 1; // Default page
  // itemsPerPage = 1; // Items per page

  constructor(private dataService:DataService) {}

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
          this.patients = response; //JSON.stringify(response);
          this.dataSource = new MatTableDataSource(response);
        });

        this.dataService.getDoctors()
        .subscribe(response => {     
          this.doctors = response;            
        });
  }

  // get totalPages(): number {
  //   return Math.ceil(this.patients.length / this.itemsPerPage);
  // }

}

// import { Component, ViewChild, AfterViewInit } from '@angular/core';
// import { MatTableDataSource } from '@angular/material/table';
// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';

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
