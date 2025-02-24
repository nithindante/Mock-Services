import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoggingServiceService {
  constructor() {}

  logMessages() {
    console.log('this is Spartaaaaa!!!!!!');
  }
}
