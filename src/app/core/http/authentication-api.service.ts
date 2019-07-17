import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env/environment.local';
import { environment } from '@env/environment';

import { AuthenticationService } from '../services';

import { LoginRequest, User, UserRequest } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthenticationApiService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(this.authenticationService.getCurrentUser()));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(loginRequest: LoginRequest) {
    return this.http.post<LoginRequest>(`${environment.api_url}/auth/signin`, loginRequest)
      .pipe(map((auth: any) => {
        // login successful if there's a jwt token in the response
        if (auth && auth.token) {
          // store auth details and jwt token in local storage to keep user logged in between page refreshes
          this.authenticationService.setCurrentUser(auth);
          this.currentUserSubject.next(auth);
        }

        return auth;
      }));
  }

  signup(signupForm: UserRequest) {
    return this.http.post<UserRequest>(`${environment.api_url}/auth/signup`, signupForm);
  }

  logout() {
    this.authenticationService.removeCurrentUser();
    this.currentUserSubject.next(null);
  }
}
