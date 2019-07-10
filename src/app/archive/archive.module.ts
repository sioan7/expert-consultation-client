import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ArchiveRoutingModule } from './archive-routing.module';

// containers
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ArchiveRoutingModule,
  ],
  declarations: [
    ...fromContainers.components,
  ],
  providers: [
  ],
})
export class ArchiveModule { }
