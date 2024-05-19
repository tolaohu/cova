import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerForm!: FormGroup;
  passwordVisible = false;
   constructor(private fb:FormBuilder){
  this.registerForm = this.buildForm();
   }
 
   buildForm():FormGroup{
     return this.fb.group({
       username: [null, [Validators.required, Validators.email]],
       bvn: [null, [Validators.required]],
       password: [null, [Validators.required]],
       confirmPassword: [null, [Validators.required]]
     });
   }
 
   submitForm(){
 
   }
  }