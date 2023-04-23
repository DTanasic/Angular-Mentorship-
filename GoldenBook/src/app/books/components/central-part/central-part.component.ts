import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SafeFiltersComponent } from '../safe-filters/safe-filters.component';

@Component({
  selector: 'app-central-part',
  templateUrl: './central-part.component.html',
  styleUrls: ['./central-part.component.scss'],
})
export class CentralPartComponent implements OnInit, OnDestroy {
  visibleHamburger: boolean = false;
  public displaySearch: string = '';
  public categoryName: string = '';

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {}

  showValue(event: string) {
    this.displaySearch = event;
  }
  showOption(categoryName: string) {
    this.categoryName = categoryName;
    console.log(categoryName);
  }

  ngOnDestroy(): void {
    //   this.matDialog
    //     .open(SafeFiltersComponent)
    //     .afterClosed()
    //     .subscribe((shouldSafe) => {
    //       console.log(shouldSafe);
    //       console.log(this.displaySearch);
    //       console.log(this.categoryName);
    //       if (shouldSafe) {
    //         const filter = {
    //           searchValue: this.displaySearch,
    //           categoryName: this.categoryName,
    //         };
    //         const objToString: string = JSON.stringify(filter);
    //         localStorage.setItem('filter', objToString);
    //       }
    //     });
  }
}
