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
//Observable<string> - It means this Observable will emit string values.
//Interview: “The generic <string> indicates that the Observable emits string values.”
//1000 means 1000 milliseconds = 1 second.
//Interview: “pipe() is used to compose and apply RxJS operators to an Observable.”
// new Date() = Creates a JavaScript Date object representing the current date and time.
//new Date().toLocaleTimeString() - Converts the current time into a readable time string. - Converts the current time into a readable time string. =>2:30:01 PM



// currentTime : Observable<string> = interval(1000).pipe(
//    map(() => new Date().toLocaleTimeString())
// );
}
