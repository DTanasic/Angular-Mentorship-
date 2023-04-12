import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentralPartComponent } from './components/central-part/central-part.component';
import { SinglebookComponent } from './components/singlebook/singlebook.component';

const routes: Routes = [
  { path: '', component: CentralPartComponent },
  {
    path: 'books/:id',
    component: SinglebookComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
