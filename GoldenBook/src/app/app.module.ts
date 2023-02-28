import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BarsComponent } from './bars/bars.component';
import { BooksComponent } from './books/books.component';
import { RowsComponent } from './rows/rows.component';
import { BookComponent } from './book/book.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BarsComponent,
    BooksComponent,
    RowsComponent,
    BookComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
