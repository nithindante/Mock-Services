import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service';
import { User } from '../user';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  constructor(
    private route: ActivatedRoute,
    private service: ServicesService,
    private location: Location // private route: ActivatedRoute, // private service: ServicesService, // private location: Location
  ) {}
  users: User | undefined;
  ngOnInit(): void {
    this.getHero();
  }
  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getHero(id).subscribe((hero) => (this.users = hero));
  }
}
