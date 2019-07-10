import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss'],
})

export class HelpComponent implements OnInit {
  public page;

  constructor() {
  }

  ngOnInit() {
    this.page = 'help page';
  }
}
