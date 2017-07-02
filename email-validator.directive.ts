import { AsyncValidator } from './async-validator.service';
import { Directive, forwardRef } from '@angular/core';
import { NG_ASYNC_VALIDATORS } from '@angular/forms';


@Directive({
  selector: '[appEmailValidator][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => AsyncValidator),
      multi: true
    }
  ]
})
export class EmailValidatorDirective {

  constructor() { }

}
