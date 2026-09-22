import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directive',
  imports: [],
  templateUrl: './attribute-directive.html',
  styleUrl: './attribute-directive.css',
})
export class AttributeDirective {

   employees : {id: number, name :string }[] = [
    {id:1 , name: 'John'},
    {id:2 , name: 'Smith'},
    {id:3 , name: 'David'},
    {id:4 , name: 'Peter'},
    {id:5 , name: 'James'}
   ];

// ------------------

isElementHidden : boolean  = false;


}
