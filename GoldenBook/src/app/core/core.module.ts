import { AppComponent } from './../app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [FooterComponent, HeaderComponent],
  imports: [CommonModule],
  exports: [FooterComponent, HeaderComponent],
})
export class CoreModule {}
