import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
set2Div() {
this.a =0
this.b = 3
}
  b: number= 1;
  a : number = 1;
setDiv() {
this.a = 2;
this.b = 0;
}
  title = 'Mock';

  constructor() {}

  ngOnInit() {}
}
