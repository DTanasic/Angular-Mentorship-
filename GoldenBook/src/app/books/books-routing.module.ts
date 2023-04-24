import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, CanDeactivate } from '@angular/router';
import { CentralPartComponent } from './components/central-part/central-part.component';
import { SinglebookComponent } from './components/singlebook/singlebook.component';
import { SafeFilterGuard } from './guards/safe-filter.guard';
import { ConfirmDeactivateGuardGuard } from './guards/confirm-deactivate-guard.guard';

const routes: Routes = [
  {
    path: '',
    component: CentralPartComponent,
    canDeactivate: [SafeFilterGuard],
  },
  {
    path: 'books/:id',
    component: SinglebookComponent,
    canDeactivate: [ConfirmDeactivateGuardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
