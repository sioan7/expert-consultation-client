import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.scss'],
})

export class DictionaryComponent implements OnInit {
  public page;

  constructor() {
  }

  ngOnInit() {
    this.page = 'Dictionary page';
  }
}
