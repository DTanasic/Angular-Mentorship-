import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Subject, takeUntil } from 'rxjs';
import { CategoryService } from 'src/app/books/services/category.service';
import { Category } from 'src/app/model/interfaces/category.interface';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output() categorySelected = new EventEmitter<string>();

  public defaultValue: string = '';
  public categories: Category[] = [];

  private unsubscirebe$: Subject<void> = new Subject<void>();

  constructor(private categoryService: CategoryService) {
    const filter = localStorage.getItem('filter');
    if (filter) {
      const stringToObj = JSON.parse(filter);
      this.defaultValue = stringToObj.categoryName;
    }
  }

  ngOnInit(): void {
    this.getAllCategories();
  }

  ngOnDestroy() {
    this.unsubscribeAll();
  }

  private unsubscribeAll() {
    this.unsubscirebe$.next();
    this.unsubscirebe$.complete();
  }

  private getAllCategories(): void {
    this.categoryService
      .getAll()
      .pipe(takeUntil(this.unsubscirebe$))
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  getOptionValue(event: MatSelectChange) {
    this.categorySelected.emit(event.value.join(','));
  }
}
