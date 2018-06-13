import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableService1 } from './../../../@core/data/smart-table1.service';

import * as moment from 'jalali-moment';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})


export class SmartTableComponent {

  types = [{id:null,name:'انتخاب کنید'},{id:1,name:'آبی'}, {id:2,name:'نقره ای'}, {id:3,name:'طلایی'}, {id:4,name:'پلاتینیوم'}];

  dateObject = moment();

  settings = {
    actions: {
      columnTitle:'عملیات',
      add:false
    },
    editable:false,
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',

    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ردیف',
        type: 'number',
        editable:false,
      },
      name: {
        title: 'نام مشتری',
        type: 'string',
        editable:false,
      },
      serialCard: {
        title: 'سریال کارت',
        type: 'number',
        editable:false,
      },
      endDate: {
        title: 'تاریخ انقضا',
        type: 'string',
        editable:false,
      },
      active: {
        title: 'وضعیت',
        type: 'boolean',
        editable:false,
      },
      comment: {
        title: 'توضیحات',
        type: 'string',
        editable:false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService1) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('آیا از خذف خود مطمئن هستید؟')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
