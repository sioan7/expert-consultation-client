import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState } from '@app/core/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CommentsService } from '../../services';
import {
  LoadReplies,
  LoadRepliesSuccess,
  LoadRepliesFail,
  AddReply,
  AddReplySuccess,
  AddReplyFail,
  RepliesActionTypes
} from '../actions/replies.action';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class RepliesEffect {

  @Effect()
  loadReplies$ = this.actions$.pipe(
      ofType(RepliesActionTypes.LoadReplies),
      switchMap(
          (action: LoadReplies) => this.commentsService.listReplies(action.nodeId, action.commentId)
              .pipe(map((comments: any) => new LoadRepliesSuccess(action.nodeId, action.commentId, comments)))),
      catchError((error: any) => of(new LoadRepliesFail(error.nodeId, error.commentId, error.response)))
  );

  @Effect()
  saveReply$ = this.actions$.pipe(
      ofType(RepliesActionTypes.AddReply),
      switchMap(
          (action: AddReply) => this.commentsService.saveReply(action.nodeId, action.commentId, action.text)
              .pipe(map(comment => new AddReplySuccess(action.nodeId, action.commentId, comment)))),
      catchError((error: any) => of(new AddReplyFail(error.nodeId, error.commentId, error.response)))
  );


  constructor(private store$: Store<CoreState>,
              private actions$: Actions,
              private commentsService: CommentsService) {
  }
}
