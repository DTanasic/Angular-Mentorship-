import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBookComponent } from './components/admin-book/admin-book.component';

@NgModule({
  declarations: [AdminBookComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
