import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BarsComponent } from './bars/bars.component';
import { BookComponent } from './book/book.component';
import { BooksComponent } from './books/books.component';
import { RowsComponent } from './rows/rows.component';

@NgModule({
  declarations: [BarsComponent, BookComponent, BooksComponent, RowsComponent],
  imports: [CommonModule],
  exports: [BarsComponent, BookComponent, BooksComponent, RowsComponent],
})
export class SharedModule {}
