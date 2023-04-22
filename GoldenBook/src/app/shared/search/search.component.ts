import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  @Output() displaySearch = new EventEmitter<string>();
  public search = '';
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.displaySearch.emit(this.search);
  }

  outputSearch(event: any) {
    this.search = event.target.value;
  }
}
