import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-reset-password-auth',
  templateUrl: './reset-password-auth.component.html',
  styleUrls: ['./reset-password-auth.component.scss']
})
export class ResetPasswordAuthComponent {

  resetForm!: FormGroup;
  passwordVisible = false;
   constructor(private fb:FormBuilder, private service:LoginService){
  this.resetForm = this.buildForm();
   }
 
   buildForm():FormGroup{
     return this.fb.group({
      resetCode: [null, [Validators.required]],
      password: [null, [Validators.required]],
     });
   }
 
   submitForm(){
     if(this.resetForm.valid){
       console.log( this.resetForm.value);
       this.service.forgetPassword(this.resetForm.value).subscribe(resp => {
         if(resp.status === 200){
         console.log(resp);
         }
       })
     }
 
   }


}
