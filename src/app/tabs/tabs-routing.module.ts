import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tabs } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: Tabs
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
