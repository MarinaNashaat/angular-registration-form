import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { formValidation } from '../validators/form.validation';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {

  form= new FormGroup({
    username: new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      formValidation.cannotContainSpace]

    ),
    password:new FormControl('',[
      Validators.required,
      formValidation.cannotContainSpace],
      [formValidation.WrongPassword
    ]),

  });

  get f() {
    return this.form.controls;
  }
  login() {
    this.form.setErrors({
      invalidLogin: true
    });
  }
}
