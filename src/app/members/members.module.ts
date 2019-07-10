import { NgModule } from '@angular/core';

// modules
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MembersRoutingModule } from './members-routing.module';

// containers
import * as fromContainers from './containers';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MembersRoutingModule,
  ],
  declarations: [
    ...fromContainers.components,
  ],
  providers: [
  ],
})
export class MembersModule { }
