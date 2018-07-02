import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './transaction.component';
import { SmartTableComponent } from './transaction-table/transaction-table.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [{
    path: 'transaction-table',
    component: SmartTableComponent,
  }],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableComponent,
];
