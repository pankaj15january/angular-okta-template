import { Routes } from '@angular/router';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { ProfileComponent } from './profile/profile.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent }, // Define the 'home' route
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Redirect to 'home' by default
  // { path: '**', redirectTo: '/home' }, // Wildcard route to handle undefined paths
  { path: 'aboutus', component: AboutusComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [OktaAuthGuard] },
  { path: 'protected', loadChildren: () => import('./protected/routes').then(m => m.PROTECTED_FEATURE_ROUTES), canActivate: [OktaAuthGuard] },
  { path: 'login/callback', component: OktaCallbackComponent }
];