import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Categories } from 'src/app/model/enum/categories.enum';
import { CategoryService } from 'src/app/books/services/category.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output() displayValue = new EventEmitter<string>();
  categoriesFilter: Categories[] = [];
  private unsubscirebe$: Subject<void> = new Subject<void>();
  constructor(private categoryService: CategoryService) {}
  displayOption: string = '';

  ngOnInit(): void {
    this.getAllCategories();
  }
  unsubscribeAll() {
    this.unsubscirebe$.next();
    this.unsubscirebe$.complete();
  }
  ngOnDestroy() {
    this.unsubscribeAll();
  }

  private getAllCategories(): void {
    this.categoryService
      .getAll()
      .pipe(takeUntil(this.unsubscirebe$))
      .subscribe((data: Categories[]) => (this.categoriesFilter = data));
  }

  onClick() {
    console.log(this.displayOption);
    this.displayValue.emit(this.displayOption);
  }

  getOptionValue(event: any): void {
    this.displayOption = event.target.value;
  }
}
