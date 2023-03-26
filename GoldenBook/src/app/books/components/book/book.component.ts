import { Book } from '../../../model/interfaces/book.model';
import { Component, Input, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/enum/categories.enum';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  @Input() book!: Book;
  constructor() {}

  ngOnInit(): void {}
}
