import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register-auth',
  templateUrl: './register-auth.component.html',
  styleUrls: ['./register-auth.component.scss']
})
export class RegisterAuthComponent {

  registerForm!: FormGroup;
  passwordVisible = false;
   constructor(private fb:FormBuilder){
  this.registerForm = this.buildForm();
   }
 
   buildForm():FormGroup{
     return this.fb.group({
       email: [null, [Validators.required, Validators.email]],
       firstName: [null, [Validators.required]],
       lastName: [null, [Validators.required]],
       dateOfBirth: [null, [Validators.required]],
       phoneNumber: [null, [Validators.required]],
       address: [null, [Validators.required]],
       metadata:{
        'even-more': "Other data",
        'additional-data': "some more data"
       }
      //  password: [null, [Validators.required]],
      //  confirmPassword: [null, [Validators.required]]
     });
   }
 
   submitForm(){
 console.log(this.registerForm.value, this.registerForm.valid)
   }


}
