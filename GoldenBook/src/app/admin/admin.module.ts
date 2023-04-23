import { SharedModule } from './../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminBookComponent } from './components/admin-book/admin-book.component';
import { BookTableComponent } from './components/book-list/book-table/book-table.component';
import { MatTableModule } from '@angular/material/table';
import { ReadMoreComponent } from './components/book-list/read-more/read-more/read-more.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [AdminBookComponent, BookTableComponent, ReadMoreComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTableModule,
    MatDialogModule,
    MatTooltipModule,
  ],
})
export class AdminModule {}
