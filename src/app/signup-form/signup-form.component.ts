import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { formValidation } from '../validators/form.validation';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form= new FormGroup({
    firstname: new FormControl('',
      Validators.required,

    ),
    lastname: new FormControl('',
    Validators.required,

  ),
  email: new FormControl('',[
  Validators.required,
  Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")],
  ),
  password: new FormControl('',[
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(32),
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,32}'),
    formValidation.cannotContainSpace


  ]),
  confirmPassword: new FormControl('',[
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(32),
    formValidation.cannotContainSpace,
    ],
  ),
  }, {validators:formValidation.PasswordShouldMatch});
  get f() {
    return this.form.controls;
  }
  login(){
    this.form.setErrors({
      invalidLogin: true
    });
  }


}
