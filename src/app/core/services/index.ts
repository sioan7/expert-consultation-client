import { AuthenticationService } from './authentication.service';
import { UserService } from './user.service';
import { DocumentsService } from './documents.service';

export const services: any[] = [
  AuthenticationService,
  UserService,
  DocumentsService,
];

export * from './authentication.service';
export * from './user.service';
export * from './documents.service';
