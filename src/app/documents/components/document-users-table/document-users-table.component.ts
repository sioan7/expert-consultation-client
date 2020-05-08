import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BaseComponent } from '@app/shared/components/base-component';
import { PageData, User } from '@app/core';

@Component({
  selector: 'app-document-users-table',
  templateUrl: './document-users-table.component.html',
  styleUrls: ['./document-users-table.component.scss']
})
export class DocumentUsersTableComponent extends BaseComponent {
  @Input() public availableUsers: User[];
  @Input() public assignedUsers: User[];
  @Input() public pageData: PageData;
  @Output() public userAssigned: EventEmitter<User> = new EventEmitter<User>();
  @Output() public userUnassigned: EventEmitter<User> = new EventEmitter<User>();

  public tableConfig = {
    displayedColumns: [
      'firstName',
      'lastName',
      'organisation',
      'assign'
    ]
  };

  public isAssigned(userId: string) {
    return this.assignedUsers && this.assignedUsers.find(assignedUser => userId === assignedUser.id);
  }
}
