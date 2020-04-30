import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AuthenticationService {
  public hasExpired: Subject<boolean> = new Subject();
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
    return !!authData;
  }

}
