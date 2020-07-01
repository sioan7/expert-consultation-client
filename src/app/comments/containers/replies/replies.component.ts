import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AddReply, getRepliesEntitiesByCommentId } from '@app/core/store';
import { CoreState } from '@app/core/store';
import { Observable } from 'rxjs';
import { Comment } from '@app/core';

@Component({
  selector: 'ec-replies',
  templateUrl: './replies.component.html',
})
export class RepliesComponent implements OnInit {
  @Input() public nodeId: string;
  @Input() public commentId: string;
  @Output() public repliesCollapsed: EventEmitter<void> = new EventEmitter<void>();

  public replies$: Observable<Comment[]>;

  constructor(private store: Store<CoreState>) {
  }

  ngOnInit() {
    this.replies$ = this.store.pipe(select(getRepliesEntitiesByCommentId(this.commentId)));
  }

  onReplyAdded(comment: string) {
    this.store.dispatch(new AddReply(this.nodeId, this.commentId, comment));
  }
}
