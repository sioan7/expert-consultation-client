import { NgModule } from '@angular/core';

// modules
import { SharedModule } from '../shared/shared.module';
import { HelpRoutingModule } from './help-routing.module';

// components
import { HelpComponent } from './containers/help/help.component';

@NgModule({
  imports: [
    SharedModule,
    HelpRoutingModule,
  ],
  declarations: [
    HelpComponent,
  ],
  providers: [],
})
export class HelpModule {}
