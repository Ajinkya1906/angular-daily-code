import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form1',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form1.html',
  styleUrl: './reactive-form1.css',
})
export class ReactiveForm1 {
 
  registerForm = new FormGroup({
     firstName : new FormControl('',
             [Validators.required,Validators.minLength(2)]),
     lastName : new FormControl(''),

     address : new FormGroup({
        city : new FormControl(''),
        state : new FormControl(''),
        pin : new FormControl('',
          [Validators.required,
             Validators.pattern('^[0-9]{6}$'),],
          )
     })
  });



 onSubmit(){
     console.log(this.registerForm);
  }
}
