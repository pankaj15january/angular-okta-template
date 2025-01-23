import { Component, OnInit } from '@angular/core';
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

}
