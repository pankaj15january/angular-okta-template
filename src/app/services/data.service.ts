// src/app/data.service.ts

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {

  private url = 'https://3j377u6gi6.execute-api.ap-south-1.amazonaws.com/dev';

    constructor(private http: HttpClient) { }

    // getData(): Observable<any> {
    //     return this.http.get('https://jsonplaceholder.typicode.com/posts/1');
    // }

    getData(): Observable<any> {
        return this.http.get('https://3j377u6gi6.execute-api.ap-south-1.amazonaws.com/dev/api/persons');
    }

    getPatient(): Observable<any> {
      return this.http.get(this.url + '/api/v1/patient');
    }

    getDoctor(): Observable<any> {
      return this.http.get(this.url + '/api/v1/doctor');
    }

    getAppointment(): Observable<any> {
      return this.http.get(this.url + '/api/v1/appointment');
    }

    // getPatient(){

    //   return this.http.get(this.url);
  
    // }
}
