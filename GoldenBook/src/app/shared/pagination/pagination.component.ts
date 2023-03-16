import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit, AfterViewInit {
  @ViewChild('pagination') paginator!: MatPaginator;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.paginator._intl.itemsPerPageLabel = 'Rows per page';
  }
}
