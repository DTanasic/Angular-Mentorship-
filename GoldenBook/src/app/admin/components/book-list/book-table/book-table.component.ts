import { ReadMoreComponent } from './../read-more/read-more/read-more.component';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { BookService } from 'src/app/books/services/book.service';
import { Book } from 'src/app/model/interfaces/book.model';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-book-table',
  templateUrl: './book-table.component.html',
  styleUrls: ['./book-table.component.scss'],
})
export class BookTableComponent implements OnInit, OnDestroy {
  coulumns: string[] = [
    'id',
    'src',
    'title',
    'author',
    'year',
    'category',
    'description',
    'ISBN',
    'revivewer/review',
    'bookoverview',
  ];

  pageSize = [5, 10, 25, 100];

  adminBooks: Book[] = [];

  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor(private bookService: BookService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getBooks();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  readMore(book: Book) {
    this.dialog
      .open(ReadMoreComponent, {
        data: book,
        width: '500px',
        height: '500px',
      })
      .afterClosed()
      .subscribe(() => {});
  }

  private getBooks() {
    this.bookService
      .getAllBooks()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((data) => {
        this.adminBooks = data;
      });
  }
}
