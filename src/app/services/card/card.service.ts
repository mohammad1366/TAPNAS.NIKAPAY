import { Card } from './../../model/card.entity';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json; charset=utf-8',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers':'Content-Type',
    'Cache-Control':'no-cache',
    'Expires':'-1',
    'Pragma' :'no-cache',
    'Server':'Microsoft-IIS/10.0',
  })
};


@Injectable({
  providedIn: 'root'
})
export class cardService {

  constructor(private http:HttpClient) { }

  GetData(){
    console.log(this.http.get<any[]>("http://eibay.ir:8085/Api/card/getlist"));
      return this.http.get<any[]>("http://eibay.ir:8085/Api/card/getlist");
  }

  SaveData(card: Card){
    console.log(this.http.post("http://eibay.ir:8085/Api/card/add", (card), httpOptions));
    return this.http.post("http://eibay.ir:8085/Api/card/add", (card), httpOptions);
  }
}
