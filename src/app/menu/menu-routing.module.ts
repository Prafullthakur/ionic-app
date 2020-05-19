import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Menu } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: Menu
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
