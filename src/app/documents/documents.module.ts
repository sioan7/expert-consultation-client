import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';
import { DocumentsRoutingModule } from './documents-routing.module';

// components
import { DocumentsComponent } from './containers/documents/documents.component';

@NgModule({
  imports: [
    SharedModule,
    DocumentsRoutingModule,
  ],
  declarations: [
    DocumentsComponent,
  ],
  providers: [],
})
export class DocumentsModule {}
