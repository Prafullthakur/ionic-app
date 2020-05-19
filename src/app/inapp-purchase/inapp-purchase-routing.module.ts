import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InappPurchase } from './inapp-purchase.page';

const routes: Routes = [
  {
    path: '',
    component: InappPurchase
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InappPurchasePageRoutingModule {}
