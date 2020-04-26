import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from '@app/core/store';
import * as fromStore from '@app/core/store';
import { Observable } from 'rxjs';
import { DocumentConsolidate } from '@app/core';

@Component({
  selector: 'app-document-breakdown',
  templateUrl: './document-breakdown.component.html',
  styleUrls: ['./document-breakdown.component.scss']
})
export class DocumentBreakdownComponent implements OnInit {
  public document$: Observable<DocumentConsolidate> = this.store.select(fromStore.getDocumentConsolidate);

  constructor(private store: Store<CoreState>) {
  }

  ngOnInit() {
  }
}
