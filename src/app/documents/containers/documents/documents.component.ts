import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { DocumentMetadata, PageData } from '@app/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '@app/core/store';
import { CoreState } from '@app/core/store';
import { Router } from '@angular/router';

@Component({
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})
export class DocumentsComponent {
  public tableSortConfig = [
    'documents.table.sort.year',
    'documents.table.sort.type',
    'documents.table.sort.initiator',
    'documents.table.sort.status',
  ];
  public documents$: Observable<DocumentMetadata[]> = this.store.pipe(select(fromStore.getDocuments));
  public documentsPageData$: Observable<PageData> = this.store.pipe(select(fromStore.getDocumentsPageData));
  public documentsLoaded$: Observable<boolean> = this.store.pipe(select(fromStore.getDocumentsLoaded));

  constructor(private store: Store<CoreState>,
              private router: Router) {
  }

  public onSortChange(sort: any) {
    console.log(sort);
  }

  public onAddButtonClick() {
    this.router.navigate(['/documents/add']);
  }
}
