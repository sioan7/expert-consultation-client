import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { BaseComponent } from '@app/shared/components/base-component';
import { takeUntil } from 'rxjs/operators';
import { AuthenticationApiService, AuthenticationService } from '@app/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent extends BaseComponent implements OnInit {

  currentLanguage: string;

  constructor(private router: Router,
              private translate: TranslateService,
              private authenticationApiService: AuthenticationApiService,
              private authService: AuthenticationService) {
    super();
    translate.onLangChange
        .pipe(takeUntil(this.destroyed$))
        .subscribe((langChange: LangChangeEvent) => this.currentLanguage = langChange.lang);
  }

  ngOnInit() {
  }

  logout() {
    this.authenticationApiService.logout();
    this.router.navigate(['/']);
  }

  profile() {
    this.router.navigate(['home']);
  }

  about() {
    this.router.navigate(['about']);
  }

  consultation() {
    this.router.navigate(['in-consultation']);
  }

  archive() {
    this.router.navigate(['archive']);
  }

  members() {
    this.router.navigate(['users']);
  }

  login() {
    this.router.navigate(['authentication/log-in']);
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  getFlagClasses(): object {
    return {
      'flag-icon-ro': this.currentLanguage === 'ro',
      'flag-icon-gb': this.currentLanguage === 'en',
    };
  }

  isLoggedIn() {
    return this.authService.isUserLoggedIn();
  }
}
