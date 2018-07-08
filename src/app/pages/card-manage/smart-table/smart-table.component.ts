import { Observable } from 'rxjs';
import { cardService } from './../../../services/card/card.service';
import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalComponent } from './../modal/modal.component';

import { DomSanitizer } from '@angular/platform-browser';

import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';

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


  settings = {
    actions: {
      columnTitle:'عملیات',
    },
    editable:false,
    mode:'external',
    noDataMessage:"اطلاعاتی برای نمایش نیست",
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
      Card16DigitNumber: {
        title: 'شماره کارت',
        type: 'number',
        editable:false,
      },
      PersianExpierDate: {
        title: 'تاریخ انقضا',
        type: 'string',
        editable:false,
      },
      IsActive: {
        title: 'فعال',
        type: 'html',
        valuePrepareFunction: (value) => {
          if(value){return this._sanitizer.bypassSecurityTrustHtml(this.inputTrue);}
          else{return this._sanitizer.bypassSecurityTrustHtml(this.inputTrue); } },
        filter: false
      },
      CardTypeTitle: {
        title: 'نوع کارت',
        type: 'boolean',
        editable:false,
      },
      PersianCreateOn: {
        title: 'زمان ثبت',
        type: 'string',
        editable:false,
      },
      LastBalanceTitle: {
        title: 'مانده',
        type: 'string',
        editable:false,
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();


  constructor(private service: cardService, private modalService: NgbModal
   , private _sanitizer: DomSanitizer,private toasterService:ToasterService  ) {
  }

  public inputTrue: string =  '<div class="custom-control custom-checkbox">'+
                              '<input type="checkbox" class="custom-control-input" id="b-checkbox" disabled checked>'+
                              '<label class="custom-control-label" for="b-checkbox"></label>'+
                              '</div>';

  public inputFalse: string = '<div class="custom-control custom-checkbox">'+
                              '<input type="checkbox" class="custom-control-input" id="b-checkbox" disabled>'+
                              '<label class="custom-control-label" for="b-checkbox"></label>'+
                              '</div>';

  ngOnInit() {
    this.service.GetData().subscribe(
      data => this.source.load(data),
      error => {window.alert('مشکل در دریافت اطلاعات');  console.log(error);}
    );
  }

  onDeleteConfirm(event): void {
    this.showToast("success",'' , "آیا از حذف مطمئن هستید ؟" +
    "<div style='clear: both;height: 10px;'></div>" +
    "<button style='margin-left: 10px; type='button' class=' clear btn btn-info waves-effect waves-light waves-effect waves-light send-data waves-effect waves-light'>" +
    "بله" +
    "</button>" +
    "<button  type='button' class='btn btn-info waves-effect waves-light waves-effect waves-light send-data waves-effect waves-light'>" +
    "خیر" +
    "</button>");

    // if (window.confirm('آیا از خذف خود مطمئن هستید؟')) {
     if(event.data.Id!=null){
      this.service.DeleteData(event.data.Id).subscribe(
        card => {
          this.showToast("success", 'عملیات باموفقیت انجام شد', "");
        },
        error => {this.showToast("error", 'مشکل در عملیات', "");  console.log(error);}
      );
     }
    // } else {
    //   event.confirm.reject();
    // }
  }

  openCreateDialog(event): void {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout' });

    activeModal.componentInstance.modalHeader = 'کارت جدید';
  }


  openEditDialog(event): void {
    const activeModal = this.modalService.open(ModalComponent, { size: 'lg', container: 'nb-layout'});

    activeModal.componentInstance.id_table=event.data.Id;
    activeModal.componentInstance.modalHeader = 'کارت';
  }


  config: ToasterConfig;

  position = 'toast-top-center';
  animationType = 'fade';
  title = '';
  content = ``;
  timeout = 5000;
  toastsLimit = 5;
  type = 'default';

  isNewestOnTop = true;
  isHideOnClick = true;
  isDuplicatesPrevented = false;
  isCloseButton = false;


  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      positionClass: this.position,
      timeout: this.timeout,
      newestOnTop: this.isNewestOnTop,
      tapToDismiss: this.isHideOnClick,
      preventDuplicates: this.isDuplicatesPrevented,
      animation: this.animationType,
      limit: this.toastsLimit,
    });
    const toast: Toast = {
      type: type,
      title: title,
      body: body,
      timeout: this.timeout,
      showCloseButton: this.isCloseButton,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }

}
