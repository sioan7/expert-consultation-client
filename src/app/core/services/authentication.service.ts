import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor() { }

  setCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getCurrentUser() {
    return localStorage.getItem('currentUser');
  }

  removeCurrentUser() {
    localStorage.removeItem('currentUser');
  }
}
