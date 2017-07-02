import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  users$: Observable<IUser[]>;

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
    this.users$ = this.userService.getUsers();
  }

}
