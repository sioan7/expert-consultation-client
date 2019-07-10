import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    alert('That`s sad, you just logged out');
  }

  applyFilter() {}

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
    this.router.navigate(['members']);
  }

  login() {
    this.router.navigate(['authentication/log-in']);
  }
}
