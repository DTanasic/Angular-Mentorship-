import { BooksModule } from './books/books.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CentralPartComponent } from './central-part/central-part.component';
import { HeadlineComponent } from './core/components/headline/headline.component';
import { AppRoutingModule } from './app-routing.module';
import { SinglebookComponent } from './books/components/singlebook/singlebook.component';

@NgModule({
  declarations: [
    AppComponent,
    CentralPartComponent,
    HeadlineComponent,
    SinglebookComponent,
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    BooksModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
