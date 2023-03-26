import { AdminLink } from './../../interfaces/admin-link.interface';
import { Category } from '../../interfaces/category.interface';
import { Admin } from './../../../model/enum/admin.enum';
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/model/enum/categories.enum';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  adminValue: boolean = false;
  category: boolean = false;
  showFiller = false;
  categoriesList: Category[] = [
    {
      id: 1,
      name: Categories.general,
    },
    {
      id: 2,
      name: Categories.history,
    },
    {
      id: 3,
      name: Categories.fantasy,
    },
    {
      id: 4,
      name: Categories.literary,
    },
  ];
  adminList: AdminLink[] = [
    {
      linkName: Admin.books,
      path: 'book',
    },
    {
      linkName: Admin.categories,
      path: 'category',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    this.category = !this.category;
  }
  onClick() {
    this.adminValue = !this.adminValue;
  }
}
