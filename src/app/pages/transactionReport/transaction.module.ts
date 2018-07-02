import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './transaction-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import {DpDatePickerModule} from './../../../../node_modules/ng2-jalali-date-picker';

@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    DpDatePickerModule
  ],
  declarations: [
    ...routedComponents,
  ],
  providers: [
    SmartTableService,
  ],
})
export class TablesModule { }
