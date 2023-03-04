import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  constructor() {}
  displaySearch: string = '';
  ngOnInit(): void {}
  getSearchValue(src: string) {
    this.displaySearch = src;
    console.log(src);
  }
}
