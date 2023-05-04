import { SidebarService } from './../../services/sidebar.service';
import { AdminLink } from '../../../model/interfaces/admin-link.interface';
import { Admin } from './../../../model/enum/admin.enum';
import { Component, OnInit } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';
import { CategoryService } from 'src/app/books/services/category.service';
import { Category } from 'src/app/model/interfaces/category.interface';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isAdmin = false;
  adminTab: boolean = false;
  categoryTab: boolean = false;
  categories: Category[] = [];
  unsubscribe$: Subject<void> = new Subject();
  isVisible: boolean = false;
  showFiller = false;
  adminList: AdminLink[] = [
    {
      linkName: Admin.books,
      path: 'book-list',
    },
    {
      linkName: Admin.categories,
      path: 'category',
    },
  ];
  constructor(
    private categoryService: CategoryService,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {
    this.getAllCategories();
    this.isAdmin = this.registerService.isAdmin();
  }

  unsubscribeAll(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  getAllCategories() {
    this.categoryService
      .getAll()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((categories) => {
        this.categories = categories;
      });
  }

  onToggle() {
    this.categoryTab = !this.categoryTab;
  }
  onClick() {
    this.adminTab = !this.adminTab;
  }
}
