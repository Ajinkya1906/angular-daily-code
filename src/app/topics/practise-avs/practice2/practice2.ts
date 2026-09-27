import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-practice2',
  imports: [FormsModule],
  templateUrl: './practice2.html',
  styleUrl: './practice2.css',
})
export class Practice2 {
 user = {
    name: '',
    email: ''
  };

 onSubmit(form: NgForm) {
    console.log(form.value);
  }
}
