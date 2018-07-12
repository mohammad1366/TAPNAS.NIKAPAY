import { Card } from '../../../model/card.entity';
import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { cardService } from '../../../services/card/card.service';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import { LocalDataSource } from 'ng2-smart-table';

import * as moment from 'jalali-moment';

@Component({
  selector: 'ngx-modal',
  templateUrl: `./modal.component.html`,
})

export class ModalComponent {
  private id_table: number;

  inputCardTypeId: number;
  inputCard16DigitNumber: number;
  inputActive: Boolean;
  inputInactive: Boolean;
  inputCustomerId: number;
  inputComment: String;
  inputExpierDate;


  types = [{id:null,name:'انتخاب کنید'},{id:1,name:'آبی'}, {id:2,name:'نقره ای'}, {id:3,name:'طلایی'}, {id:4,name:'پلاتینیوم'}];


  constructor(private service: cardService,private activeModal: NgbActiveModal,private toasterService:ToasterService) { }

  modalHeader: string;

  ngOnInit() {
    if(this.id_table!=null){
      let card = new Card();

      this.service.GetItem(this.id_table).subscribe(
        data => {
          console.log(data);
          this.inputCard16DigitNumber=data.Card16DigitNumber;
          this.inputComment=data.Comment;
          this.inputCardTypeId=data.CardTypeId;

          if(data.PersianExpierDate!=null)
            this.inputExpierDate=moment(data.PersianExpierDate, 'jYYYY/jMM/jDD');
          else
            this.inputExpierDate=moment();

          if (data.IsActive)
          {
            let element = <HTMLInputElement> document.getElementById("inputActive");
            element.checked=true
          }else{
            let element = <HTMLInputElement> document.getElementById("inputInactive1");
            element.checked=true;
          }

        },
        error => {window.alert('مشکل در دریافت اطلاعات');  console.log(error);}
      );
    }else{
      this.inputExpierDate=moment();
    }
  }

  closeModal() {
    this.activeModal.close();
  }

  saveModal() {
    let card = new Card();
    card.Card16DigitNumber=this.inputCard16DigitNumber;
    card.CardTypeId=this.inputCardTypeId;
    // card.ExpierDate=this.inputExpierDate;
    card.Comment=this.inputComment;

    let element = <HTMLInputElement> document.getElementById("inputActive");
    if (element.checked) {card.IsActive=true}

    element = <HTMLInputElement> document.getElementById("inputInactive1");
    if (element.checked) {card.IsActive=false}

    element = <HTMLInputElement> document.getElementById("inputInactive2");
    if (element.checked) {card.IsActive=false}

    element = <HTMLInputElement> document.getElementById("inputInactive3");
    if (element.checked) {card.IsActive=false}

    if(this.id_table!=null)
    {
      this.service.EditData(card).subscribe(
        card => {
          this.showToast("success", 'عملیات باموفقیت انجام شد', "");
          this.activeModal.close();
        },
        error => {this.showToast("error", 'مشکل در عملیات', "");  console.log(error);}
      );

    }else{
      this.service.SaveData(card).subscribe(
        card => {
          this.showToast("success", 'عملیات باموفقیت انجام شد', "");
          this.activeModal.close();
        },
        error => {this.showToast("error", 'مشکل در عملیات', "");  console.log(error);}
      );

    }
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
