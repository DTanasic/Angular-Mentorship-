import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { SafeFiltersComponent } from '../components/safe-filters/safe-filters.component';
import { CentralPartComponent } from '../components/central-part/central-part.component';

@Injectable({
  providedIn: 'root',
})
export class SafeFilterGuard implements CanDeactivate<unknown> {
  constructor(private matDialog: MatDialog) {}
  canDeactivate(
    component: CentralPartComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const modal = this.matDialog.open(SafeFiltersComponent);

    const obserbavle = modal.afterClosed().pipe<boolean>(
      map((shouldSafe: boolean) => {
        if (shouldSafe) {
          const filter = {
            searchValue: component.displaySearch,
            categoryName: component.categoryName,
          };

          const objToString: string = JSON.stringify(filter);

          localStorage.setItem('filter', objToString);
        }
        return shouldSafe;
      })
    );

    return obserbavle;
  }
}
