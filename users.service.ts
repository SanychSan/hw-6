import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/from';

const API_BASE = 'https://learn.javascript.ru/courses/groups/api/participants';
const API_KEY  = '1fxf2pg';

@Injectable()
export class UsersService {

  users: IUser[];

  constructor(
    private http: Http
  ) { }

  getUsers(): Observable<IUser[]> {
    if (this.users) {
      return Observable.of<IUser[]>(this.users);
    }

    return this.http
      .get(API_BASE, {
        params: {
          key: API_KEY
        }
      })
      .map(res => this.users = <Array<IUser>>res.json())
      .map(res => {
        return res.map((item, i) => {
          item.id = String(i + 1);
          return item;
        });
      })
      .catch(error => {
        console.warn(error);
        return Observable.of<IUser[]>([]);
      });
  }

  getUser(id: string): Observable<IUser> {
    return this
      .getUsers()
      .switchMap(res => res)
      .filter(res => res.id === id);
  }

  setUser(user: IUser) {
    this.users.filter(existUser => existUser.id === user.id).map(existUser => {
      Object.keys(user).forEach(key => {
        existUser[key] = user[key];
      });
    });
  }

}
