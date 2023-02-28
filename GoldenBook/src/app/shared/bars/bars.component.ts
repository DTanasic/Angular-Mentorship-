import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss'],
})
export class BarsComponent implements OnInit {
  constructor() {}
  displaySearch: string = '';
  ngOnInit(): void {}

  getSearchValue(src: string) {
    this.displaySearch = src;
  }
}
