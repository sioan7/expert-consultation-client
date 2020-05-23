import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeCommentComponent } from './node-comment.component';

describe('NodeCommentComponent', () => {
  let component: NodeCommentComponent;
  let fixture: ComponentFixture<NodeCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodeCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodeCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
