import { createSelector } from '@ngrx/store';
import * as fromFeature from '../reducers';
import * as fromDocuments from '../reducers/documents.reducer';
import { DocumentConsolidate, DocumentMetadata, IDocumentConsolidate, IDocumentMetadata, IPageData, PageData } from '../../models';

const getDocumentsState = createSelector(fromFeature.getCoreState, (state: fromFeature.CoreState) => state.documents);

const getDocumentsAsInterfaces = createSelector(getDocumentsState, fromDocuments.getDocumentsEntities);
const getDocumentConsolidateAsInterface = createSelector(getDocumentsState, fromDocuments.getDocumentEntity);

export const getDocumentsEntities = createSelector(getDocumentsAsInterfaces,
    (documents: { [id: string]: IDocumentMetadata }) => {
      const documentsEntities = {};

      Object.keys(documents).map(key => {
        documentsEntities[key] = new DocumentMetadata(documents[key]);
      });

      return documentsEntities;
    }
);

export const getDocumentsPageDataAsInterface = createSelector(getDocumentsState, fromDocuments.getDocumentsPageData);
export const getDocumentsPageData = createSelector(getDocumentsPageDataAsInterface,
    (iPageData: IPageData) => {
      const pageData = new PageData();
      pageData.fromJson(iPageData);
      return pageData;
    });

export const getDocuments = createSelector(getDocumentsEntities,
    (entities: { [id: number]: DocumentMetadata }) => Object.keys(entities).map(id => entities[id])
);
export const getDocumentsLoaded = createSelector(getDocumentsState, fromDocuments.getDocumentsLoaded);
export const getDocumentsLoading = createSelector(getDocumentsState, fromDocuments.getDocumentsLoading);
export const getDocumentConsolidate = createSelector(getDocumentConsolidateAsInterface,
    (documentConsolidate: IDocumentConsolidate) => new DocumentConsolidate(documentConsolidate));
export const getDocumentMetadata = createSelector(getDocumentConsolidate,
    (documentConsolidate: DocumentConsolidate) => documentConsolidate.documentMetadata);
