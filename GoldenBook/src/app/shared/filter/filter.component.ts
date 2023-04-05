import { CategoriesModel } from 'src/app/model/interfaces/categories.model';
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { Subject } from 'rxjs';
import { CategoriesService } from 'src/app/books/services/categories.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit, OnDestroy {
  @Output() displayValue = new EventEmitter<string>();
  categories: CategoriesModel[] = [];
  unsubscirebe$: Subject<void> = new Subject<void>();
  constructor(private categorieService: CategoriesService) {}
  displayOption: string = '';

  ngOnInit(): void {
    this.categorieService.getAllCategories().subscribe((data) => {
      this.categories = data;
      console.log(data);
    });
  }
  ngOnDestroy() {
    this.unsubscirebe$?.next();
    this.unsubscirebe$?.complete();
  }

  onClick() {
    console.log(this.displayOption);
    this.displayValue.emit(this.displayOption);
  }

  getOptionValue(event: any): void {
    this.displayOption = event.target.value;
  }
}
