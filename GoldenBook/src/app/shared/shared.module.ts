import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [SearchComponent, FilterComponent, PaginationComponent],
  imports: [CommonModule, MatPaginatorModule, MatSelectModule],
  exports: [
    SearchComponent,
    FilterComponent,
    PaginationComponent,
    MatPaginatorModule,
    MatSelectModule,
  ],
})
export class SharedModule {}
