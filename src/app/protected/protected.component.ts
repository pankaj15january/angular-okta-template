import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-protected',
  standalone: true,
  imports: [],
  template: `
    <p>
      protected works!
    </p>
    <p>{{patient}}</p>
    <div>***********************Paitent Data***********************</div>
    <p>{{patient}}</p>
    <div>***********************Doctor Data***********************</div>
    <p>{{doctor}}</p>
    <div>***********************Appointment Data***********************</div>
    <p>{{appointment}}</p>
  `,
  styles: ``
})
export class ProtectedComponent {

  patient:any;
  doctor:any;
  appointment:any;

  constructor(private dataService:DataService) {}

  

    ngOnInit() {

      // this.dataService.getData()

      //   .subscribe(response => {
      //     alert(JSON.stringify(response));
      //     this.patient = JSON.stringify(response);

      //   });
      this.dataService.getPatient()
        .subscribe(response => {          
          this.patient = JSON.stringify(response);

        });

        // this.dataService.getDoctor()
        // .subscribe(response => {          
        //   this.doctor = JSON.stringify(response);

        // });

        // this.dataService.getAppointment()
        // .subscribe(response => {          
        //   this.appointment = JSON.stringify(response);

        // });

  }

}
