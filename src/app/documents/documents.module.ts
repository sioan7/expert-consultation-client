import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { DocumentsRoutingModule } from './documents-routing.module';
import * as fromComponents from './components';
import * as fromContainer from './containers';
import * as fromGuards from './guards';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DocumentsRoutingModule,
  ],
  declarations: [
    ...fromContainer.components,
    ...fromComponents.components,
  ],
  providers: [
    ...fromGuards.guards,
  ],
})
export class DocumentsModule {
}
