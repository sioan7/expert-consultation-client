import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  private authDataKey = 'authenticationData';

  setAuthenticationData(data) {
    localStorage.setItem(this.authDataKey, JSON.stringify(data));
  }

  getAuthenticationData() {
    return localStorage.getItem(this.authDataKey);
  }

  removeAuthenticationData() {
    localStorage.removeItem(this.authDataKey);
  }

  public isUserLoggedIn() {
    const authData = this.getAuthenticationData();
    return authData && !this.isTokenExpired(authData['accessToken']);
  }

  isTokenExpired(token?: string): boolean {
    if (!token) {
      token = this.getAuthenticationData();
    }
    if (!token) {
      return true;
    }

    const tokenExpirationDate = this.getTokenExpirationDate(token);
    if (tokenExpirationDate === undefined) {
      return false;
    }
    return !(tokenExpirationDate.valueOf() > new Date().valueOf());
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }


}
