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
  categoriesList: string[] = [
    Categories.general,
    Categories.history,
    Categories.fantasy,
    Categories.literary,
  ];
  adminList: string[] = [Admin.books, Admin.categories];
  constructor() {}

  ngOnInit(): void {}

  onToggle() {
    this.category = !this.category;
  }
  onClick() {
    this.adminValue = !this.adminValue;
  }
}
