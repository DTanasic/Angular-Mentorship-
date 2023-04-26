import { SidebarService } from './../../services/sidebar.service';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private sidebarService: SidebarService) {}

  visible: boolean = false;

  ngOnInit(): void {}

  hamburgerClicked(): void {
    this.visible = !this.visible;
    this.sidebarService.togleSideNav$.next(this.visible);
  }

  deleteData() {
    localStorage.clear();
    location.reload();
  }
}
