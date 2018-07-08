import { Observable } from 'rxjs';
import { transactionService } from './../../../services/trnsaction/transaction.service';
import { LocalDataSource } from 'ng2-smart-table';
import { Component } from '@angular/core';

import * as moment from 'jalali-moment';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './transaction-table.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})


export class SmartTableComponent {
  rowCount=0;

  dateObject = moment();

  settings = {
    actions: {
      columnTitle:'عملیات',
      add:false,
      edit:false,
      delete:false
    },
    noDataMessage:"اطلاعاتی برای نمایش نیست",
    columns: {
      AmountTitle: {
        title: 'مبلغ',
        type: 'number',
        editable:false,
        width:'15%',
      },
      TrCode: {
        title: 'کد پیگیری',
        type: 'number',
        editable:false,
        width:'15%',
      },
      PersianCreateOn: {
        title: 'زمان ثبت',
        type: 'string',
        editable:false,
        width:'15%',
      },
      PersianTrDateTime: {
        title: 'زمان تراکنش',
        type: 'number',
        editable:false,
        width:'15%',
      },
      OperationStatusTitle: {
        title: 'نوع عملیات',
        type: 'string',
        editable:false,
        width:'15%',
      },
      StatusCodeTitle: {
        title: 'وضعیت عملیات',
        type: 'boolean',
        editable:false,
        width:'25%',
      },

    },
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(private service: transactionService) {
  }

  ngOnInit() {
    this.service.GetData().subscribe(
      data => this.source.load(data),
      error => {window.alert('مشکل در دریافت اطلاعات');  console.log(error);}
    );

  }

}
