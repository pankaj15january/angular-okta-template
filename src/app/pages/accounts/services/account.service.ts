import { Injectable } from '@angular/core';
import { Account } from '../../../models/account.model';
import { LastUpdate } from "../../../interfaces";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  
  constructor(private http: HttpClient) {}

  // public getAllAccounts() : Observable<Account[]> {
  //   //Account accountsModule;
  //   return of([
  //     {
  //       "id": "1",
  //       "duiNumber": "duiNumber1",
  //       "email": "Hello account holder",
  //       "name": "Pankaj",
  //       "lastname": "Jha",
  //       "gender": "M",
  //       "phone": "9876543210",
  //  "isValidated": true,
  //   "role": "Admin",
  //   "photoUrl": "abc.com",    
  //   "photoId": "123456789",
  //    "createdAt":  new Date("1986-05-04T22:59:59.000Z"),
  //  "lastUpdate": []

  //     }
  //   ]);
  // }

  // constructor() { }

  // public getAllAccounts() : Account[]{
  //   //Account accountsModule;
  //   return [
  //     {
  //       "id": "1",
  //       "duiNumber": "duiNumber1",
  //       "email": "Hello account holder",
  //       "name": "Pankaj",
  //       "lastname": "Jha",
  //       "gender": "M",
  //       "phone": "9876543210",
  //  "isValidated": true,
  //   "role": "Admin",
  //   "photoUrl": "abc.com",    
  //   "photoId": "123456789",
  //    "createdAt":  new Date("1986-05-04T22:59:59.000Z"),
  //  "lastUpdate": []

  //     }
  //   ];
  // }
}

