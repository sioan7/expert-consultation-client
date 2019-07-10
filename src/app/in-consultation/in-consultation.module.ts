import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { InConsultationRoutingModule } from './in-consultation-routing.module';

// containers
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    InConsultationRoutingModule,
  ],
  declarations: [
    ...fromContainers.components,
  ],
  providers: [
  ],
})
export class InConsultationModule { }
