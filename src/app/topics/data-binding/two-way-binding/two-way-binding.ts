import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  imports: [FormsModule],
  templateUrl: './two-way-binding.html',
  styleUrl: './two-way-binding.css',
})
export class TwoWayBinding {

  userName : string = "";
  //Definite asssignment operator is used to tell the compiler that this property
  //  will be assigned a value before it is accessed, even though it is not initialized
  //  in the constructor or at the point of declaration.

}
