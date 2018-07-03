import { Card } from './../../../model/card.entity';
import { Component, OnInit, } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { cardService } from './../../../services/card/card.service';

import * as moment from 'jalali-moment';

@Component({
  selector: 'ngx-modal',
  template: `
    <div class="modal-header">
      <span>{{modalHeader}}</span>
      <button class="close" aria-label="Close" (click)="closeModal()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>

    <div class="modal-body">

    <div class="row">

      <div class="col-sm-6">
          <div class="form-group">
              <label>نوع کارت</label>
              <select class="form-control" id="inputCardTypeId" [(ngModel)]="inputCardTypeId">
                  <option *ngFor="let x of types" [value]="x.id" >{{x.name}}</option>
              </select>
            </div>
      </div>

      <div class="col-sm-6">
        <div class="form-group">
          <label for="inputCard16DigitNumber">شماره کارت</label>
          <input type="text" class="form-control" id="inputCard16DigitNumber" placeholder="شماره کارت" [(ngModel)]="inputCard16DigitNumber">
        </div>
      </div>

  </div>

  <div class="row">

    <div class="col-sm-6">
        <div class="form-group">
            <label> تاریخ انقضا</label>
            <div class="form-control">
              <dp-date-picker
                dir="rtl"
                [(ngModel)]="inputExpierDate"
                mode="day"
                placeholder="تاریخ انقضا"
                theme="dp-material"
                style="width:100%; "
                id="inputExpierDate">
              </dp-date-picker>
            </div>
        </div>
    </div>

    <div class="form-group  col-sm-6" >
        <label> وضعیت </label>
        <div class="row" style="padding-right: 30px;padding-top: 15px;">
          <div class="form-check ">
          <label class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" name="active" checked id="inputActive" [(ngModel)]="inputActive">
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">فعال</span>
          </label>
        </div>
        <div class="form-check">
          <label class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" name="active" id="inputInactive" >
            <span class="custom-control-indicator"></span>
            <span class="custom-control-description">غیرفعال</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <div class="row">

    <div class="col-sm-6">
      <div class="form-group">
        <label for="inputCustomerId">مشتری</label>
        <input type="text" class="form-control" id="inputCustomerId" placeholder="مشتری" [(ngModel)]="inputCustomerId">
      </div>
    </div>

    <div class="col-sm-6">
      <div class="form-group">
        <label for="inputComment">توضیحات</label>
        <input type="text" class="form-control" id="inputComment" placeholder="توضیحات" [(ngModel)]="inputComment">
      </div>
    </div>

  </div>

    </div>

    <div class="modal-footer">
      <button class="btn btn-md btn-success" (click)="saveModal()">ثبت</button>
      &nbsp;&nbsp;
      <button class="btn btn-md btn-danger" (click)="closeModal()">بستن</button>
    </div>
  `,
})

export class ModalComponent {

  inputCardTypeId: number;
  inputCard16DigitNumber: number;
  inputActive: Boolean;
  inputInactive: Boolean;
  inputCustomerId: number;
  inputComment: string;
  inputExpierDate = moment();


  types = [{id:null,name:'انتخاب کنید'},{id:1,name:'آبی'}, {id:2,name:'نقره ای'}, {id:3,name:'طلایی'}, {id:4,name:'پلاتینیوم'}];


  constructor(private service: cardService,private activeModal: NgbActiveModal) { }

  modalHeader: string;

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

    element = <HTMLInputElement> document.getElementById("inputInactive");
    if (element.checked) {card.IsActive=false}

    this.service.SaveData(card).subscribe(
      data => {window.alert('عملیات باموفقیت انجام شد');  console.log(data);},
      error => {window.alert('مشکل در دریافت اطلاعات');  console.log(error);}
    );

    this.activeModal.close();
  }
}
