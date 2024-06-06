import { Injectable, EventEmitter } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Profile } from './models/profile.model';
import { ApiPaths } from './api/api-paths.enum';
import { environment } from '../../env/environment';
import { jwtDecode } from 'jwt-decode';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private apiUrl = `${environment.apiHost}/${ApiPaths.Profile}`;
  private profile: Profile | null = null;

  constructor(private http: HttpClient, private oauthService: OAuthService) {}

  getProfile(): Observable<Profile> {
    const headers = this.createAuthorizationHeaders();
    const url = this.createProfileUrl();
    return this.http.get<Profile>(url, { headers });
  }

  updateProfile(updatedProfile: Profile): Observable<Profile> {
    const headers = this.createAuthorizationHeaders();
    const url = this.createProfileUrl();
    return this.http.put<Profile>(url, updatedProfile, { headers });
  }

  deleteProfile(): Observable<void> {
    const headers = this.createAuthorizationHeaders();
    const url = this.createProfileUrl();
    return this.http.delete<void>(url, { headers });
  }

  requestCertificate(profile: Profile): Observable<Profile> {
    const headers = this.createAuthorizationHeaders();
    const url = this.createProfileUrl()
    return this.http.post<Profile>(`${this.apiUrl}/${ApiPaths.CreateCertificate}`, profile, {headers});
  }

  private createAuthorizationHeaders(): HttpHeaders {
    const token = this.oauthService.getAccessToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    });
  }

  getProfileById(profileId: string): Observable<Profile> {
    const headers = this.createAuthorizationHeaders();
    const url = `${this.apiUrl}/${profileId}`;
    return this.http.get<Profile>(url, { headers });
  }

  private createProfileUrl(): string {
    const profileId = this.extractProfileIdFromToken();
    return `${this.apiUrl}/${profileId}`;
  }

  private extractProfileIdFromToken(): number {
    const token: any = this.oauthService.getAccessToken();
    const decodedToken: any = jwtDecode(token);
    return decodedToken.ldap_id;
  }

  logout(): void {
    localStorage.removeItem(environment.userLocalStorageKey);
  }
}

