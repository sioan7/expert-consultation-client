import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import {
  // Services
  AuthenticationApiService,
  // Models
  User,
} from '@app/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  newUser: User;

  public signUpForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router,
              private authenticationApiService: AuthenticationApiService
  ) { }

  ngOnInit() {
    this.signUpForm.valueChanges.subscribe((aValue) => {
      this.newUser = new User();
      this.newUser.fromForm(aValue);
    });
  }

  onSubmit() {
    const errorFields = {
      NAME_NOT_EMPTY: 'name',
      NAME_MAX_LENGTH_40: 'name',
      USERNAME_NOT_EMPTY: 'username',
      USERNAME_MAX_LENGTH_15: 'username',
      EMAIL_NOT_EMPTY: 'email',
      EMAIL_MAX_LENGTH_40: 'email',
      PASSWORD_NOT_EMPTY: 'password',
      PASSWORD_MAX_LENGTH_100: 'password',
    };

    for (const control in this.signUpForm.controls) {
      if (this.signUpForm.controls.hasOwnProperty(control)) {
        this.signUpForm.controls[control].markAsUntouched();
        this.signUpForm.controls[control].setErrors({});
      }
    }

    const aSignUp = this.newUser;
    this.authenticationApiService.sigup(aSignUp)
      .subscribe({
        next: signup => this.router.navigate(['authentication/log-in']),
        error: errors => {
          for (const error of errors) {
            this.signUpForm.controls[errorFields[error]].markAsTouched();
            this.signUpForm.controls[errorFields[error]].setErrors({[error]: true});
          }
        }
      });

  }

  onCancel() {
    this.router.navigate(['authentication/log-in']);
  }

}
