import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { List } from './list.page';

const routes: Routes = [
  {
    path: '',
    component: List
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListPageRoutingModule {}
