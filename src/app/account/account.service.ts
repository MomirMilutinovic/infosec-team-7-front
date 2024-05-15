import { Injectable } from '@angular/core';
import { Account } from './model/account.model';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {AuthResponse} from "./model/auth-resposne.model";
import {JwtHelperService} from "@auth0/angular-jwt";
import { environment } from '../../env/environment';
import { ApiPaths } from '../shared/api/api-paths.enum';
import PasswordUpdate from "../shared/models/password-update.model";
import {Property} from "../shared/models/property.model";
import { NotificationService } from '../notifications/notification.service';
import NotificationType from "../shared/models/notification-type.enum";
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../app.config';

const notLoggedInRole = "unregistered";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    skip: 'true',
  });


  user$ = new BehaviorSubject(notLoggedInRole);
  userState = this.user$.asObservable();

  constructor(private http: HttpClient, private notificationService: NotificationService, private oauthService: OAuthService) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    this.user$.next(this.getRole());
  }

  getToken(): string {
    return this.oauthService.getAccessToken();
  }

  login(auth: any): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiHost}/${ApiPaths.LogIn}`, auth, {
      headers: this.headers,
    }).pipe(
      tap((response: AuthResponse) => {
        localStorage.setItem(environment.userLocalStorageKey, response.accessToken);
        this.setUser();
        this.notificationService.initializeWebSocketConnection();
      })
    );
  }

  logout(): void {
    this.oauthService.logOut();
  }

  getRole(): any {
    if (this.isLoggedIn()) {
      const accessToken: any = this.getToken();
      const helper = new JwtHelperService();
      const roles: string[] = helper.decodeToken(accessToken).realm_access.roles;
      return roles.filter(e => ["ADMIN", "HOST", "GUEST"].includes(e))[0];
    }
    return notLoggedInRole;
  }

  getAccountId(): number | null {
    if (this.isLoggedIn()) {
      const accessToken: any = this.oauthService.getAccessToken();
      const helper = new JwtHelperService();
      return helper.decodeToken(accessToken).profileId;
    }
    return null;
  }

  isLoggedIn(): boolean {
    const accessToken: any = this.getToken();
    if(accessToken == null || this.isTokenExpired(accessToken)) {
      this.user$.next(notLoggedInRole);
      return false;
    }
    return true;
  }
  isTokenExpired(accessToken: any): boolean {
    const helper = new JwtHelperService();
    return helper.decodeToken(accessToken).exp < Date.now() / 1000;
  }

  setUser(): void {
    this.user$.next(this.getRole());
  }

  signUp(account: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.apiHost}/${ApiPaths.Profile}`, account, {
      headers: this.headers,
    });
  }

  verify(verificationLinkId: number) {
    return this.http.post(`${environment.apiHost}/${ApiPaths.Verification}/${verificationLinkId}`, {
      headers: this.headers,
    }, {responseType: 'text'});
  }

  updatePassword(passwordData: PasswordUpdate): Observable<any> {
    return this.http.put(`${environment.apiHost}/${ApiPaths.Profile}/update-password`, passwordData);
  }

  getFavoriteProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(`${environment.apiHost}/${ApiPaths.Profile}/favorites`);
  }

  addFavoriteProperty(propertyId: number) {
    return this.http.post(`${environment.apiHost}/${ApiPaths.Profile}/favorites/${propertyId}`, null);
  }

  deleteFavoriteProperty(propertyId: number) {
    return this.http.delete(`${environment.apiHost}/${ApiPaths.Profile}/favorites/${propertyId}`);
  }

  getProfileImage(): Observable<Blob> {
    return this.http.get(`${environment.apiHost}/${ApiPaths.Profile}/profile-image`,
      {responseType: 'blob'});
  }

  updateProfileImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', image);
    return this.http.post(`${environment.apiHost}/${ApiPaths.Profile}/profile-image`, formData);
  }

  getAccount(id: number): Observable<Account> {
    return this.http.get<Account>(`${environment.apiHost}/${ApiPaths.Profile}/${id}`);
  }

  toggleNotificationsEnabled(type: NotificationType) {
    return this.http.put<Account>(`${environment.apiHost}/${ApiPaths.Profile}/notifications`, {type});
  }

  startLogin(): void {
    this.oauthService.initCodeFlow();
  }
}
