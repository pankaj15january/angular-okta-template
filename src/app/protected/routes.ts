import { Route } from '@angular/router';
import { PatientComponent } from '../patient/patient.component';
import { AppointmentFormComponent } from '../appointment-form/appointment-form.component';
import { DoctorComponent } from '../doctor/doctor.component';
import { DoctorListComponent } from '../doctor/doctorlist.component';
import { ProtectedComponent } from '../protected/protected.component';
import { EmailFormComponent } from '../email-form/email-form.component';


export const PROTECTED_FEATURE_ROUTES: Route[] = [
    { path: '', component: ProtectedComponent },
    { path: 'patient', component: PatientComponent },
    { path: 'doctor', component: DoctorComponent },
    { path: 'app-doctor-list', component: DoctorListComponent },
    { path: 'app-appointment-form', component: AppointmentFormComponent },
    { path: 'app-email-form', component: EmailFormComponent }
];