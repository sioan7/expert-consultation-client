import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from '@app/core/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CommentsService } from '../../services';
import {
  CommentsActionTypes,
  LoadComments,
  LoadCommentsSuccess,
  LoadCommentsFail,
  AddComment,
  AddCommentFail,
  AddCommentSuccess
} from '../actions/comments.action';
import { IncrementDocumentNodeCommentCount } from '../actions/documents.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class CommentsEffect {

  @Effect()
  loadComments$ = this.actions$.pipe(
      ofType(CommentsActionTypes.LoadComments),
      switchMap(
          (action: LoadComments) => this.commentsService.list(action.nodeId)
              .pipe(map((comments: any) => new LoadCommentsSuccess(action.nodeId, comments)))),
      catchError((commentsError: any) => of(new LoadCommentsFail(commentsError.nodeId, commentsError.response)))
  );

  @Effect()
  saveComment$ = this.actions$.pipe(
      ofType(CommentsActionTypes.AddComment),
      switchMap(
          (action: AddComment) => this.commentsService.save(action.nodeId, action.text)
              .pipe(map(comment => new AddCommentSuccess(action.nodeId, comment)))),
      catchError((commentsError: any) => of(new AddCommentFail(commentsError.nodeId, commentsError.response)))
  );

  @Effect()
  saveCommentSuccess$ = this.actions$.pipe(
      ofType(CommentsActionTypes.AddCommentSuccess),
      map((action: AddComment) => new IncrementDocumentNodeCommentCount(action.nodeId)),
  );


  constructor(private store$: Store<CoreState>,
              private actions$: Actions,
              private commentsService: CommentsService) {
  }
}
