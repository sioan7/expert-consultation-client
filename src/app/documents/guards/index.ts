import { DocumentsGuard } from './documents.guard';
import { DocumentBreakdownGuard } from './document-breakdown.guard';

export const guards: any[] = [
  DocumentsGuard,
  DocumentBreakdownGuard,
];

export * from './documents.guard';
