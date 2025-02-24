import { Component, ChangeDetectorRef } from '@angular/core';
import { ServicesService } from '../services.service';
import { User } from '../user';

@Component({
  selector: 'app-basicdetails',
  templateUrl: './basicdetails.component.html',
  styleUrls: ['./basicdetails.component.css'],
})
export class BasicdetailsComponent {
redirect(content: string) {

}
  OnHover(th: any) {
    this.arr.forEach((ele) => {
      ele.selected = false;
    });
    th.selected = true;
  }
  details: User[] | undefined;

  arr: Array<any> = [
    { name: 'One', selected: false },
    { name: 'Two', selected: false },
    { name: 'Three', selected: false },
    { name: 'Four', selected: false },
  ];

  constructor(
    private service: ServicesService // private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.service.getHeroes().subscribe((eke) => {
      this.details = eke;
    });
  }

  // onHoverChange(arrs: any, isHovered: boolean) {
  //   arrs.hovered = isHovered;
  //   // this.cdr.detectChanges();
  // }
}
