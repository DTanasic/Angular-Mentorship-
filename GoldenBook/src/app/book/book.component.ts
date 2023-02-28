import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() title?: string;
  @Input() src?: string;
  @Input() name?: string;
  @Input() category?: string;
  @Input() description?: string;
  @Input() overview?: string;

  constructor() {}

  ngOnInit(): void {}
}
