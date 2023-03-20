import { Book } from '../../../model/interfaces/book.model';
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/enum/categories.enum';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
