import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
})

export class DocumentsComponent implements OnInit {
  public page;

  constructor() {
  }

  ngOnInit() {
    this.page = 'documents page';
  }
}
