import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-builtin-pipe',
  imports: [CommonModule],
  templateUrl: './builtin-pipe.html',
  styleUrl: './builtin-pipe.css',
})
export class BuiltinPipe {

  CurrentDate : Date = new Date();
  decimalValue : number = 123456.789;
  percentage: number = 0.80;
  currency: number = 1234.56;

  fruits : string []  = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Grapes'];
  
  myObject = {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    address: {
      street: '123 Main St',
      zip: '10001'
    }
  }

  setting = [{
    theme : 'dark',
    language : 'en'  
  },
{
    theme : 'dark',
    language : 'en'  
  },
  {
    theme : 'dark',
    language : 'en'  
  }]
}
