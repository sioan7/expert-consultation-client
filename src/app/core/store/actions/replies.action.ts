import { Action } from '@ngrx/store';
import { Comment, Page } from '../../models';

export enum RepliesActionTypes {
  LoadReplies = '[Replies] Load Replies',
  LoadRepliesSuccess = '[Replies] Load Replies Success',
  LoadRepliesFail = '[Replies] Load Replies Fail',
  AddReply = '[Replies] Add Reply',
  AddReplySuccess = '[Replies] Add Reply Success',
  AddReplyFail = '[Replies] Add Reply Fail',
}

export class LoadReplies implements Action {
  readonly type = RepliesActionTypes.LoadReplies;

  constructor(public nodeId: string, public commentId: string) {
  }
}

export class LoadRepliesSuccess implements Action {
  readonly type = RepliesActionTypes.LoadRepliesSuccess;

  constructor(public nodeId: string, public commentId: string, public commentsPage: Page<Comment>) {
  }
}

export class LoadRepliesFail implements Action {
  readonly type = RepliesActionTypes.LoadRepliesFail;

  constructor(public nodeId: string, public commentId: string, public error: any) {
  }
}

export class AddReply implements Action {
  readonly type = RepliesActionTypes.AddReply;

  constructor(public nodeId: string, public commentId: string, public text: string) {
  }
}

export class AddReplySuccess implements Action {
  readonly type = RepliesActionTypes.AddReplySuccess;

  constructor(public nodeId: string, public commentId: string, public comment: Comment) {
  }
}

export class AddReplyFail implements Action {
  readonly type = RepliesActionTypes.AddReplyFail;

  constructor(public nodeId: string, public commentId: string, public error: any) {
  }
}

export type RepliesAction =
    | LoadReplies
    | LoadRepliesSuccess
    | LoadRepliesFail
    | AddReply
    | AddReplySuccess
    | AddReplyFail;
