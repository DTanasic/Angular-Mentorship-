import { OnInit, Component, OnDestroy } from '@angular/core';
import { BookService } from '../../services/book.service';
import { Subject, take, takeUntil } from 'rxjs';
import { Book } from 'src/app/model/interfaces/book.model';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
  public books: Book[] = [];

  private unsubscribe$ = new Subject<void>();

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getAllBooks();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private getAllBooks() {
    this.bookService
      .getAllActiveBooks()
      .pipe(take(1))
      .subscribe((books) => {
        this.books = books;
      });
  }

  deleteBook(book: Book) {
    this.bookService
      .delete(book)
      .pipe(take(1))
      .subscribe((data) => {
        console.log(data);
        this.bookService
          .getAllActiveBooks()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((books) => {
            this.books = books;
          });
      });
  }

  softDelete(book: Book) {
    this.bookService
      .softDelete(book)
      .pipe(take(1))
      .subscribe((data) => {
        console.log(data, 'deletedSoft');
        this.bookService
          .getAllActiveBooks()
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe((books) => {
            this.books = books;
          });
      });
  }
}
