import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class CommentsStore {
  public expandedComments: Subject<string> = new Subject<string>();
  private commentsExpandState: { [key: string]: boolean } = {};

  public isExpanded(commentId: string) {
    return !!this.commentsExpandState[commentId];
  }

  public expand(commentId: string) {
    this.commentsExpandState[commentId] = true;
    this.expandedComments.next(commentId);
  }

  public collapse(commentId: string) {
    this.commentsExpandState[commentId] = false;
  }
}
