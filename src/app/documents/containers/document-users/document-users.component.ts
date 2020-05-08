import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '@app/core/store';
import { CoreState } from '@app/core/store';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { DocumentMetadata, DocumentsService, PageData, User } from '@app/core';

@Component({
  templateUrl: './document-users.component.html',
  styleUrls: ['./document-users.component.scss'],
})
export class DocumentUsersComponent implements OnInit {
  public documentMetadata$: Observable<DocumentMetadata> = this.store.pipe(select(fromStore.getDocumentMetadata));
  public availableUsers$: Observable<User[]> = this.store.pipe(select(fromStore.getUsers));
  public pageData$: Observable<PageData> = this.store.pipe(select(fromStore.getUsersPageData));
  public assignedUsers: User[];

  private documentId: string;

  constructor(private store: Store<CoreState>,
              private router: Router,
              private route: ActivatedRoute,
              private documentsService: DocumentsService) {
  }

  ngOnInit(): void {
    this.documentId = this.route.snapshot.params['id'];
    this.store.dispatch(new fromStore.LoadUsers());
    this.documentsService.getAssignedUsers(this.documentId).subscribe((assignedUsers: User[]) => {
      this.assignedUsers = assignedUsers;
    });
  }

  public onUserAssigned(user: User) {
    this.assignedUsers.push(user);
  }

  public onUserUnassigned(user: User) {
    this.assignedUsers = this.assignedUsers.filter(assignedUser => assignedUser.id !== user.id);
  }

  public save() {
    const assignedUsersIds = this.assignedUsers.map((user: User) => user.id);
    this.documentsService.saveAssignedUsers(this.documentId, assignedUsersIds);
  }
}
