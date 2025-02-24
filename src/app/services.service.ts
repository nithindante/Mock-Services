import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { LoggingServiceService } from './logging-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  getHero(id: number): Observable<User> {
    return this.http.get<User>(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
  }
  constructor(private http: HttpClient, private log: LoggingServiceService) {}

  getList() {
    return <User[]>[
      { id: 1, name: 'Alice', email: 'nithin@example.com' },
      { id: 2, name: 'Bob', email: 'raj@example.com' },
      { id: 3, name: 'Charlie', email: 'charlie@example.com' },
    ];
  }

  getHeroes() {
    this.log.logMessages();
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }
}
