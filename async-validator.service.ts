import { UsersService } from './users.service';
import { Injectable } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable()
export class AsyncValidator implements Validator {

  constructor(
    private usersService: UsersService
  ) {}

  validate(c: AbstractControl) {
    return this
      .validateUniqueEmailObservable(c.value)
      .debounceTime(500)
      .distinctUntilChanged()
      .first();
  }

  validateUniqueEmailObservable(email: string) {
    return new Observable(observer => {
      this.usersService
        .getUsers()
        .subscribe(users => {
          if (users.some(user => user.email === email)) {
            observer.next({ asyncInvalid: true });
          } else {
            observer.next(null);
          }
        });
    });
  }
}
