import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './../core/core.module';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [BookComponent, BooksComponent],
  imports: [CommonModule, CoreModule, RouterModule, AppRoutingModule],
  exports: [BookComponent, BooksComponent],
})
export class BooksModule {}
