import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArbitritionComponent } from './arbitrition/arbitrition.component';

const routes: Routes = [
  {path: 'index', component: ArbitritionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
