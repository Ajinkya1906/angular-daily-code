import { Component } from '@angular/core';
import { Hover } from '../custom-directive/hover';

@Component({
  selector: 'app-custom-directive',
  imports: [Hover],
  templateUrl: './custom-directive.html',
  styleUrl: './custom-directive.css',
})
export class CustomDirective {

}

