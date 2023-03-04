import { BooksModule } from './books/books.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CentralPartComponent } from './central-part/central-part.component';

@NgModule({
  declarations: [AppComponent, CentralPartComponent],
  imports: [BrowserModule, CoreModule, SharedModule, BooksModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
