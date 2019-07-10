import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';
import { DictionaryRoutingModule } from './dictionary-routing.module';

// components
import { DictionaryComponent } from './containers/dictionary/dictionary.component';

@NgModule({
  imports: [
    SharedModule,
    DictionaryRoutingModule,
  ],
  declarations: [
    DictionaryComponent,
  ],
  providers: [],
})
export class DictionaryModule {}
