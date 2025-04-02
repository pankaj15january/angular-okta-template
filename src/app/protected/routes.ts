import { Route } from '@angular/router';
import { AppointmentComponent } from '../appointment/appointment.component';
import { DoctorComponent } from '../doctor/doctor.component';
import { DoctorListComponent } from '../doctor/doctorlist.component';
import { ProtectedComponent } from '../protected/protected.component';


export const PROTECTED_FEATURE_ROUTES: Route[] = [
    { path: '', component: ProtectedComponent },
    { path: 'appointment', component: AppointmentComponent },
    { path: 'doctor', component: DoctorComponent },
    { path: 'app-doctor-list', component: DoctorListComponent }
];