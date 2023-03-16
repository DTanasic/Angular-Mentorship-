import { SinglebookComponent } from './books/components/singlebook/singlebook.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CentralPartComponent } from './central-part/central-part.component';

const routes: Routes = [
  {
    path: '',
    component: CentralPartComponent,
  },
  {
    path: 'book',
    component: SinglebookComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
