import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Card } from './../../model/card.entity';

import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Origin': '*',

  })
};


@Injectable({
  providedIn: 'root'
})
export class cardService {

  constructor(private httpCient:HttpClient) { }

  GetData(){
      return this.httpCient.get<any[]>("http://2.181.1.55:8085/Api/card/getlist");
  }

  GetItem(id){
      return this.httpCient.get<Card>("http://2.181.1.55:8085/Api/card/GetById/"+id);
  }

  SaveData(card: Card): Observable<Card> {
    // this.httpCient.post("http://2.181.1.55:8085/Api/card/add", card).subscribe(
    //   res => {
    //     console.log("OK: "+res);
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log(err.error);
    //     console.log("name: "+err.name);
    //     console.log("message: "+err.message);
    //     console.log("status: "+err.status);

    //       if (err.error instanceof Error) {
    //         console.log("Client-side error occured.");
    //       } else {
    //         console.log("Server-side error occured.");
    //       }
    //   }
    // );
    // var headers = new Headers();

    // headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

    var body = {
      "Id": 4,
        "ParentId": null,
        "CardTypeId": 1,
        "CardSerialNumber": "62158796",
        "Card16DigitNumber": "2222222222222222",
        "Cvv2": 223,
        "Pin": "1111",
        "Pin2": "145223423",
        "ExpierDate": "2019-04-23T04:26:53.887",
        "IsActive": true,
        "LastBalance": 6987,
        "Comment": null,
        "CreatorId": 1,
        "CreateOn": "2018-04-23T04:45:15.997",
        "LastModifierId": null,
        "LastModifiedDate": null,
        }

    return this.httpCient.post<Card>("http://2.181.1.55:8085/Api/card/add", body, httpOptions);


  }

  EditData(card: Card): Observable<Card> {
    // this.httpCient.post("http://2.181.1.55:8085/Api/card/add", card).subscribe(
    //   res => {
    //     console.log("OK: "+res);
    //   },
    //   (err: HttpErrorResponse) => {
    //     console.log(err.error);
    //     console.log("name: "+err.name);
    //     console.log("message: "+err.message);
    //     console.log("status: "+err.status);

    //       if (err.error instanceof Error) {
    //         console.log("Client-side error occured.");
    //       } else {
    //         console.log("Server-side error occured.");
    //       }
    //   }
    // );
    // var headers = new Headers();

    // headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

    var body = {
      "Id": 4,
        "ParentId": null,
        "CardTypeId": 1,
        "CardSerialNumber": "62158796",
        "Card16DigitNumber": "3333333333333333",
        "Cvv2": 223,
        "Pin": "1111",
        "Pin2": "145223423",
        "ExpierDate": "2019-04-23T04:26:53.887",
        "IsActive": true,
        "LastBalance": 1234567890,
        "Comment": null,
        "CreatorId": 1,
        "CreateOn": "2018-04-23T04:45:15.997",
        "LastModifierId": null,
        "LastModifiedDate": null,
        }

    return this.httpCient.post<Card>("http://2.181.1.55:8085/Api/card/Edit", body, httpOptions);
  }

  DeleteData(id:number): Observable<Card> {
    var body = {
      "id": id,
    }
    return this.httpCient.post<Card>("http://2.181.1.55:8085/Api/card/Edit/"+id, body, httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }
  private handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
