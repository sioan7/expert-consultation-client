import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { DocumentsState } from '@app/core/store';
import { Observable } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import * as fromStore from '../../core/store';

@Injectable()
export class DocumentBreakdownGuard implements CanActivate {
  constructor(private store: Store<DocumentsState>) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    const documentId = route.params['id'];
    this.store.dispatch(new fromStore.LoadDocumentConsolidate(documentId));

    return this.store.pipe(select(fromStore.getDocumentsLoaded))
        .pipe(
            filter(loaded => loaded),
            take(1)
        );
  }
}
