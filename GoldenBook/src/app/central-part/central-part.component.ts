import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-central-part',
  templateUrl: './central-part.component.html',
  styleUrls: ['./central-part.component.scss'],
})
export class CentralPartComponent implements OnInit {
  visibleHamburger: boolean = false;
  displaySearch: string = '';
  displayValue: string = '';

  constructor() {}

  ngOnInit(): void {}
  showValue(event: string) {
    this.displaySearch = event;
  }
  showOption(event: string) {
    this.displayValue = event;
  }
}
