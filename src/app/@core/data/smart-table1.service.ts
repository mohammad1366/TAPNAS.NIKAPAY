import { Injectable } from '@angular/core';

@Injectable()
export class SmartTableService1 {

  data = [{
    id: 1,
    name: 'محمد امین دریابار',
    serialCard:'1234567890123456',
    endDate:'1400-05-06',
    active:'فعال',
    comment:'بدون مشکل '
  }];

  getData() {
    return this.data;
  }
}
