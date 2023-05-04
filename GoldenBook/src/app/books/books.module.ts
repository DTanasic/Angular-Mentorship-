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
import { SafeFiltersComponent } from './components/safe-filters/safe-filters.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ExitSingleBookComponent } from './components/exit-single-book/exit-single-book/exit-single-book.component';
import { FullnamePipe } from '../core/pipe/fullname.pipe';

@NgModule({
  declarations: [
    BookComponent,
    BooksComponent,
    CentralPartComponent,
    BookBackgroundDirective,
    SinglebookComponent,
    SafeFiltersComponent,
    ExitSingleBookComponent,
    FullnamePipe,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedModule,
    HttpClientModule,
    MatDialogModule,
  ],
  exports: [],
  providers: [BookService],
})
export class BooksModule {}
