import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

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

 setting = [
  { theme: 'dark1', language: 'en' },
  { theme: 'dark2', language: 'en' },
  { theme: 'dark3', language: 'en' }
];


mySetting = {
  theme: 'dark',
  language: 'en'
};



userSettings = [
  {
    theme: 'dark',
    language: 'en'
  },
  {
    theme: 'light',
    language: 'fr'
  }
];


currentTime$: Observable<string> = interval(1000).pipe( 
  map(() => new Date().toLocaleTimeString()) 
);
// "$ is a naming convention used to indicate that a variable is an Observable. It is not mandatory."

// currentTime : Observable<string> = interval(1000).pipe(
//    map(() => new Date().toLocaleTimeString())
// );


}



