import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '@app/core/store';
import { CoreState } from '@app/core/store';
import { Observable } from 'rxjs';
import { Comment } from '@app/core';

@Component({
  selector: 'app-node-comment',
  templateUrl: './node-comment.component.html',
  styleUrls: ['./node-comment.component.scss']
})
export class NodeCommentComponent implements OnInit {

  @Input() public nodeId: string;
  addCommentMode = false;
  public comments$: Observable<Comment[]>;

  constructor(private store: Store<CoreState>) {
  }

  ngOnInit() {
    this.comments$ = this.store.pipe(select(fromStore.getCommentsEntitiesByNodeId(this.nodeId)));
  }

}
