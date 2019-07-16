import {OnDestroy} from '@angular/core';
import {Subject} from 'rxjs';

export class BaseComponent implements OnDestroy {
  destroyed$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }
}
