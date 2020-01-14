import { UploadFileEffects } from './file-upload.effect';
import { UsersEffects } from './users.effect';
import { ImportUsersEffects } from './import-users.effect';
import { DocumentsEffect } from './documents.effect';

export const effects: any[] = [
  UploadFileEffects,
  UsersEffects,
  DocumentsEffect,
  ImportUsersEffects,
];

export * from './file-upload.effect';
export * from './users.effect';
export * from './import-users.effect';
export * from './documents.effect';
