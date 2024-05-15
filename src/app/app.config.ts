import { ApplicationConfig, APP_INITIALIZER } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { AuthConfig, OAuthService, provideOAuthClient } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig ={
  issuer: 'http://localhost:8080/realms/booking',
  tokenEndpoint: 'http://localhost:8080/realms/booking/protocol/openid-connect/token',
  redirectUri: window.location.origin,
  clientId: 'booking-webapp',
  responseType: 'code',
  scope: 'openid profile',
}

function initializeOAuth(oauthService: OAuthService): Promise<void> {
  return new Promise( (resole) => {
    oauthService.configure(authConfig);
    oauthService.setupAutomaticSilentRefresh();
    oauthService.loadDiscoveryDocumentAndLogin().then( () => resole() );
  })
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideOAuthClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: (oauthService: OAuthService) => {
        return () => {
          initializeOAuth(oauthService);
        }
      },
      multi: true,
      deps: [
        OAuthService
      ]
    }
  ]
};
