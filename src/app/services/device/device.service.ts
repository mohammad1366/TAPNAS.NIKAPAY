import { Card } from './../../model/card.entity';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=utf-8',
    'Access-Control-Allow-Origin':'true',
    'Access-Control-Allow-Methods':'POST, GET, OPTIONS, PUT, DELETE',
    'Access-Control-Allow-Headers':'Authorization',

  })
};


@Injectable({
  providedIn: 'root'
})
export class deviceService {

  constructor(private http:HttpClient) { }

  GetData(){
      return this.http.get<any[]>("http://eibay.ir:8085/Api/device/GetList");
  }

}
