import { FilterComponent } from './filter/filter.component';
import { SearchComponent } from './search/search.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
@NgModule({
  declarations: [SearchComponent, FilterComponent, PaginationComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
  exports: [
    SearchComponent,
    FilterComponent,
    PaginationComponent,
    MatPaginatorModule,
    MatSelectModule,
    MatCheckboxModule,
  ],
})
export class SharedModule {}
