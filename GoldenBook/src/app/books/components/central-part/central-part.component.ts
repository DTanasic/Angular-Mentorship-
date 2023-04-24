import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-central-part',
  templateUrl: './central-part.component.html',
  styleUrls: ['./central-part.component.scss'],
})
export class CentralPartComponent implements OnInit {
  visibleHamburger: boolean = false;
  public displaySearch: string = '';
  public categoryName: string = '';

  constructor() {}

  ngOnInit(): void {}

  showValue(event: string) {
    this.displaySearch = event;
  }
  showOption(categoryName: string) {
    this.categoryName = categoryName;
    console.log(categoryName);
  }
}
