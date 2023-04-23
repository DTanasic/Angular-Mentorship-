import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() displaySearch = new EventEmitter<string>();
  defaultValue = '';
  public search = '';

  constructor() {
    const filter = localStorage.getItem('filter');
    if (filter) {
      const stringToObj = JSON.parse(filter);
      this.defaultValue = stringToObj.searchValue;
    }
  }

  ngOnInit(): void {}

  onClick(): void {
    this.displaySearch.emit(this.search);
  }

  outputSearch(event: any) {
    this.search = event.target.value;
  }
}
