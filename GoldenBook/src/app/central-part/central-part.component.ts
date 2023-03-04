import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-central-part',
  templateUrl: './central-part.component.html',
  styleUrls: ['./central-part.component.scss'],
})
export class CentralPartComponent implements OnInit {
  displaySearch: string = '';
  constructor() {}

  ngOnInit(): void {}
  showValue(event: string) {
    this.displaySearch = event;
  }
}
