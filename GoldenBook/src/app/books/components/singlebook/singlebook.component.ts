import { BookService } from './../../services/book.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Book } from 'src/app/model/interfaces/book.model';

@Component({
  selector: 'app-singlebook',
  templateUrl: './singlebook.component.html',
  styleUrls: ['./singlebook.component.scss'],
})
export class SinglebookComponent implements OnInit, OnDestroy {
  bookId: number | undefined;
  book?: Book;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private activatedRouter: ActivatedRoute,
    private bookService: BookService
  ) {}

  ngOnInit(): void {
    this.getBookbyId();
  }
  getBookbyId() {
    let bookId: number = Number(
      this.activatedRouter.snapshot.paramMap.get('id')
    );
    this.bookService
      .getSingeBookById(bookId)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((book) => {
        this.book = book;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
