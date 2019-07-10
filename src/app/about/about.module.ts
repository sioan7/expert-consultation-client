import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';

// containers
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AboutRoutingModule,
  ],
  declarations: [
    ...fromContainers.components,
  ],
  providers: [
  ],
})
export class AboutModule { }
