import { createSelector } from '@ngrx/store';
import { CoreState, getCoreState } from '../reducers';
import { Comment } from '../../models';
import { getRepliesEntities } from '../reducers/replies.reducer';

const getRepliesState = createSelector(getCoreState, (state: CoreState) => state.replies);

const getRepliesAsInterfaces = (commentId: string) =>
    createSelector(getRepliesState, (state) => getRepliesEntities(state, commentId));

export const getRepliesEntitiesByCommentId = (commentId) => createSelector(
    getRepliesAsInterfaces(commentId),
    comments => comments.map(comment => new Comment(comment)));
