import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './device-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import {DpDatePickerModule} from 'ng2-jalali-date-picker';
import { ModalComponent } from './modal/modal.component';

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
  ], entryComponents: [
    ModalComponent
  ],
})
export class TablesModule { }
