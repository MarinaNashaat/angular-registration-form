import { AbstractControl, ValidationErrors, FormControl } from '@angular/forms';

export class formValidation {
  static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
    if ((control.value as string).indexOf(' ') >= 0) {
      return { cannotContainSpace: true };
    }
    return null;
  }


static PasswordShouldMatch(control:AbstractControl):ValidationErrors|null{
  let password=control.get('password') as FormControl;
  let conPassword=control.get('confirmPassword') as FormControl;
  if(password.value!==conPassword.value){
    return({PasswordShouldMatch:true});
  }
  else{
    return(null);
  }

}

static WrongPassword(control:AbstractControl):Promise<ValidationErrors|null>{
  let regex=/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,32}/;

  return new Promise((resolve)=>{
    setTimeout(()=>{
      if(!regex.test(control.value)){
        resolve({WrongPassword:true});
      }
      else{
        resolve(null);
      }
    },2000)
  })
}

}
