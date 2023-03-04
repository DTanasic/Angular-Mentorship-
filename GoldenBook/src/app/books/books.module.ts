import { BooksComponent } from './books/books.component';
import { BookComponent } from './/book/book.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BookComponent, BooksComponent],
  imports: [CommonModule],
  exports: [BookComponent, BooksComponent],
})
export class BooksModule {}
