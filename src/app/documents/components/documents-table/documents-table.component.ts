import { BaseComponent } from '@app/shared/components/base-component';
import { Component, Input } from '@angular/core';
import { DocumentMetadata, PageData } from '@app/core';

@Component({
  selector: 'app-documents-table',
  templateUrl: './documents-table.component.html',
  styleUrls: ['./documents-table.component.scss']
})
export class DocumentsTableComponent extends BaseComponent {
  @Input() documents: DocumentMetadata[];
  @Input() pageData: PageData;

  public tableConfig = {
    displayedColumns: [
      'name',
      'date',
      'type',
      'initiator',
      'status'
    ]
  };
}
