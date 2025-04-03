import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { routes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { PaginatePipe } from './protected/paginate.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from './shared/shared/shared.module';


export const appConfig: ApplicationConfig = {
  
  providers: [
    importProvidersFrom(
      OktaAuthModule.forRoot({
        oktaAuth: new OktaAuth({
          issuer: 'https://dev-07280506.okta.com/oauth2/default',
          clientId: '0oajnn8rn3cEFsjVI5d7',
          // redirectUri: `${window.location.origin}/login/callback`,
          redirectUri: `${window.location.origin}/angular-okta-template/login/callback`,
          scopes: ['openid', 'offline_access', 'profile']
        })
      }), HttpClientModule, CommonModule, NgxPaginationModule, SharedModule
    ),
    provideRouter(routes)
  ]
};