import { AsyncValidator } from './async-validator.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserCardComponent } from './users/user-card/user-card.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';

import { UsersService } from './users.service';

import { UserEditComponent } from './users/user-edit/user-edit.component';
import { EmailValidatorDirective } from './email-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserListComponent,
    UserCardComponent,
    UserDetailComponent,
    UserEditComponent,
    EmailValidatorDirective
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UsersService,
    AsyncValidator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
