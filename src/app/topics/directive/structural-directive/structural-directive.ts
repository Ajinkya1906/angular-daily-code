import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  imports: [],
  templateUrl: './structural-directive.html',
  styleUrl: './structural-directive.css',
})
export class StructuralDirective {

  num: number = 52;

  countries: string[] = ['India', 'USA', 'UK', 'Canada', 'Australia'];

  dayValue: number = 21;
}
