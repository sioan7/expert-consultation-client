import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import * as fromUsers from './users.reducer';
import * as fromDocuments from './documents.reducer';
import * as fromFileUpload from './file-upload.reducer';
import * as fromImportUsers from './import-users.reducer';

export interface State {
  core: CoreState;
}

export interface CoreState {
  users: fromUsers.UserState;
  fileUpload: fromFileUpload.FileUploadState;
  importUsers: fromImportUsers.ImportUserState;
  documents: fromDocuments.DocumentsState;
}

export const reducers: ActionReducerMap<CoreState> = {
  users: fromUsers.reducer,
  documents: fromDocuments.reducer,
  fileUpload: fromFileUpload.reducer,
  importUsers: fromImportUsers.reducer
};

export const getCoreState = createFeatureSelector<CoreState>('core');

export { UserState } from './users.reducer';
export { FileUploadState } from './file-upload.reducer';
export { DocumentsState } from './documents.reducer';
export { ImportUserState } from './import-users.reducer';
