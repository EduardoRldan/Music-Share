// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { OAuthService, AuthConfig } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private oauthService: OAuthService) {
    this.configure();
  }

  private configure() {
    const authConfig: AuthConfig = {
      issuer: 'https://your-identity-server',
      redirectUri: window.location.origin,
      clientId: 'your-client-id',
      responseType: 'code',
      scope: 'openid profile email',
      showDebugInformation: true
    };
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  public login() {
    this.oauthService.initCodeFlow();
  }

  public logout() {
    this.oauthService.logOut();
  }

  public get identityClaims() {
    return this.oauthService.getIdentityClaims();
  }

  public get isAuthenticated() {
    return this.oauthService.hasValidAccessToken();
  }
}
