import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },  {
    path: 'card-manage',
    loadChildren: './card-manage/tables.module#TablesModule',
  }, {
    path: 'device-manage',
    loadChildren: './device-manage/device.module#TablesModule',
  },{
    path: 'customer-manage',
    loadChildren: './customer-manage/customer.module#TablesModule',
  },{
    path: 'transactionReport',
    loadChildren: './transactionReport/transaction.module#TablesModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '**',
    component: NotFoundComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
