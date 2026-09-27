import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-practice1',
  imports: [ReactiveFormsModule],
  templateUrl: './practice1.html',
  styleUrl: './practice1.css',
})
export class Practice1 {
  registrationForm = new FormGroup({
      firstName : new FormControl('',[
        Validators.required,
        Validators.minLength(3)
      ]),
      lastName : new FormControl('',[Validators.required]),
      email : new FormControl('',[Validators.required,Validators.email]),
 
      address : new FormGroup({
         city : new FormControl(),
         state: new FormControl(),
         pin: new FormControl('',[
          Validators.required,
          Validators.pattern('^[0-9]{6}$')
         ])
      })
    });

    submitForm(){
      if(this.registrationForm.valid){
                console.log("Registration Form:",this.registrationForm)
                        console.log("**************************************************")
        console.log("Registration Form:",this.registrationForm.value)
      }else{
        console.log("invalid form.");
      }
    }
}
