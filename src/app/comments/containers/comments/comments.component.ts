import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '@app/core/store';
import { CoreState } from '@app/core/store';
import { Observable } from 'rxjs';
import { Comment } from '@app/core';
import { CommentsStore } from '@app/comments/containers/comments/comments.store';

@Component({
  selector: 'ec-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [CommentsStore],
})
export class CommentsComponent implements OnInit {
  @Input() public nodeId: string;
  @Output() public commentsCollapsed: EventEmitter<void> = new EventEmitter<void>();

  public comments$: Observable<Comment[]>;

  constructor(private store: Store<CoreState>,
              private commentsStore: CommentsStore) {
  }

  ngOnInit() {
    this.comments$ = this.store.pipe(select(fromStore.getCommentsEntitiesByNodeId(this.nodeId)));
    this.commentsStore.expandedComments.subscribe((commentId: string) => {
      this.store.dispatch(new fromStore.LoadReplies(this.nodeId, commentId));
    });
  }

  onCommentAdded(comment: string) {
    this.store.dispatch(new fromStore.AddComment(this.nodeId, comment));
  }

  areRepliesExpanded(commentId: string) {
    return this.commentsStore.isExpanded(commentId);
  }

  onRepliesCollapsed(commentId: string) {
    this.commentsStore.collapse(commentId);
    document.getElementById(commentId).scrollIntoView({behavior: "smooth"});
  }

  expandReplies(commentId: string) {
    if (!this.commentsStore.isExpanded(commentId)) {
      this.commentsStore.expand(commentId);
    }
  }
}
