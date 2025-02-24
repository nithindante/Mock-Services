import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
word: any;
data: any
ngOnInit(){
  this.data = new Observable<any>((response)=>{
    response.next('Active now')
    setTimeout(() => {
      response.next('Active 1 min ago')
    }, 2000);
    setTimeout(() => {
      response.next('Active 2 min ago')
    }, 4000);
    setTimeout(() => {
      response.error('Error')
    }, 6000);
  })

  this.data.subscribe((res:any)=>{
    this.word = res
  },(error:any)=>{
    this.word = error
  })
}


}
