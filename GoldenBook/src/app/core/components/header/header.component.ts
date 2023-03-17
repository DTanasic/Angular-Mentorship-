import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Output() visibleValue = new EventEmitter<boolean>();

  constructor() {}

  visible: boolean = false;

  ngOnInit(): void {}

  hamburgerClicked(): void {
    this.visible = !this.visible;
    this.visibleValue.emit(this.visible);
    console.log(this.visible);
  }
}
