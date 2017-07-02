import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './../../users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styles: [
    `
      .btn-group { margin-bottom: 20px }
    `
  ]
})
export class UserEditComponent implements OnInit, OnDestroy {

  user: IUser;
  userId: string;

  paramsSubscribe;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.paramsSubscribe = this.route.params
      .pluck('userId')
      .switchMap(userId => {
        this.userId = <string>userId;
        return this.usersService.getUser(<string>userId);
      })
      .subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.paramsSubscribe.unsubscribe();
  }

  goToUsers() {
    this.router.navigateByUrl(`/users/${this.userId}`);
  }

  save(form: NgForm) {
    console.log(form.valid);

    Object.keys(form.controls).forEach(key => {
      form.controls[key].markAsTouched()
    });

    if (form.valid) {
      this.usersService.setUser({
        id: this.userId,
        firstName: form.controls.firstName.value,
        surname: form.controls.surname.value,
        country: form.controls.country.value,
        photo: this.user.photo,
        email: form.controls.email.value
      });
    }
  }

}
