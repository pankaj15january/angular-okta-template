import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { DoctorDetailComponent } from './doctordetail.component';
// import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
// import { MatTableModule } from '@angular/material/table';

import { CommonModule } from '@angular/common';
import { DataService } from '../services/data.service';

// import { MatPaginator } from '@angular/material/paginator';
// import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { PaginatePipe } from '../patient/paginate.pipe';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-doctor-list',
  imports: [DoctorDetailComponent, CommonModule, MatTableModule, CommonModule, PaginatePipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  standalone: true,
  templateUrl: './doctorlist.component.html',
  styles: [`
    ul { list-style-type: none; padding: 0; }
    li { cursor: pointer; padding: 5px; border-bottom: 1px solid #ccc; }
    li:hover { background-color: #f0f0f0; }
  `]
})
export class DoctorListComponent {

  displayedColumns: string[] = ['doctorId', 'firstName', 'lastName', 'email', 'phone', 'specialization', 'availableDate', 'message'];

  constructor(private dataService:DataService) {}
  // doctors: Doctor[] =[
  //   { name: 'Dr. Smith', specialization: 'Cardiologist' },
  //   { name: 'Dr. Jane', specialization: 'Dermatologist' },
  //   { name: 'Dr. Brown', specialization: 'Neurologist' }
  // ];
  dataSource = new MatTableDataSource<any>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  selectedDoctor: any;
  doctors: any;

  selectDoctor(doctor: any) {
    alert(JSON.stringify(doctor));
    this.selectedDoctor = doctor;
  }

  ngOnInit(): void {
    this.loadPage();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  loadPage() {
    this.dataService.getDoctors()
      .subscribe(response => {
        this.doctors = response;     //JSON.stringify(response);
        this.dataSource = new MatTableDataSource(response);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
