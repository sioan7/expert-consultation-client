import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// // guards
// import * as fromGuards from './guards';

// pages
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: 'login',
    component: fromContainers.LoginComponent,
  },
  {
    path: 'register',
    redirectTo: 'sign-up/'
  },
  {
    path: 'sign-up/:email',
    component: fromContainers.SignUpComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AuthenticationRoutingModule {}
