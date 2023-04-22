import { SinglebookComponent } from './components/singlebook/singlebook.component';
import { BooksRoutingModule } from './books-routing.module';
import { SharedModule } from './../shared/shared.module';
import { AppRoutingModule } from './../app-routing.module';
import { RouterModule } from '@angular/router';
import { CoreModule } from './../core/core.module';
import { BooksComponent } from './components/books/books.component';
import { BookComponent } from './components/book/book.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CentralPartComponent } from './components/central-part/central-part.component';
import { BookBackgroundDirective } from './components/directives/book-background.directive';
import { BookService } from './services/book.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    BookComponent,
    BooksComponent,
    CentralPartComponent,
    BookBackgroundDirective,
    SinglebookComponent,
  ],
  imports: [CommonModule, BooksRoutingModule, SharedModule, HttpClientModule],
  exports: [],
  providers: [BookService],
})
export class BooksModule {}
