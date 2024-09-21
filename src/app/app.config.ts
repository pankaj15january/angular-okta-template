import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { OktaAuthModule } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(
      OktaAuthModule.forRoot({
        oktaAuth: new OktaAuth({
          issuer: 'https://dev-07280506.okta.com/oauth2/default',
          clientId: '0oajnn8rn3cEFsjVI5d7',
          redirectUri: `${window.location.origin}/login/callback`,
          scopes: ['openid', 'offline_access', 'profile']
        })
      })
    ),
    provideRouter(routes)
  ]
};