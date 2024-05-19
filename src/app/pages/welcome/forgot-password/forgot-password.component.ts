import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  @Output() closeEvent = new EventEmitter();
  
  forgotForm!: FormGroup;
  passwordVisible = false;
   constructor(private fb:FormBuilder, private service:LoginService){
  this.forgotForm = this.buildForm();
   }
 
   buildForm():FormGroup{
     return this.fb.group({
      email: [null, [Validators.required, Validators.email]],
     });
   }
 
   submitForm(){
     if(this.forgotForm.valid){
       console.log( this.forgotForm.value);
       this.service.forgetPassword(this.forgotForm.value).subscribe(resp => {
         if(resp.status === 200){
         console.log(resp);
         }
       })
     }
 
   }

   closeDialog() {
    this.closeEvent.emit();
  }
 }
 